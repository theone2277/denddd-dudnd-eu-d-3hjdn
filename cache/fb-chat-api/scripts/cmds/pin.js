const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
const path = require("path");

module.exports = {
    config: {
        name: "pinterest",
        aliases: ["pin", "pint"],
        version: "1.0.2",
        author: "Ncs Pro",
        role: 0,
        countDown: 5,
        shortDescription: {
            en: "Search for images on Pinterest"
        },
        longDescription: {
            en: ""
        },
        category: "wiki",
        guide: {
            en: "{pn} <search query> -<number of images>"
        }
    },

    onStart: async function ({ api, event, args, config }) {
        try {
            const keySearch = args.join(" ");
            if (!keySearch.includes("-")) {
                return api.sendMessage(`Please enter the search query and number of images to return in the format: ${config.guide.en}`, event.threadID, event.messageID);
            }
            const keySearchs = keySearch.substr(0, keySearch.indexOf('-')).trim();
            const numberSearch = parseInt(keySearch.split("-").pop().trim()) || 6;

            const res = await axios.get(`https://pint-api.blackxlegend1.repl.co/pin?search=${encodeURIComponent(keySearchs)}`);
            const data = res.data.data;
            const imgData = [];

            // Create a temporary directory for image storage
            const tempDir = path.join(__dirname, "temp");
            fs.ensureDirSync(tempDir);

            for (let i = 0; i < Math.min(numberSearch, data.length); i++) {
                const imgResponse = await axios.get(data[i], { responseType: 'arraybuffer' });
                const imgPath = path.join(tempDir, `${i + 1}.jpg`);
                await fs.outputFile(imgPath, imgResponse.data);
                imgData.push(fs.createReadStream(imgPath));
            }

            await api.sendMessage({
                attachment: imgData,
                body: `Here are the top ${imgData.length} image results for "${keySearchs}":`
            }, event.threadID, event.messageID);

            // Remove the temporary directory and its contents
            fs.removeSync(tempDir);
        } catch (error) {
            console.error(error);
            return api.sendMessage(`Please add the number of images to your keysearch, for example: pin cat -10`, event.threadID, event.messageID);
        }
    }
};