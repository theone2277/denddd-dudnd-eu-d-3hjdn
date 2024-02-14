const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
  config: {
    name: "poli",
    credits: "Loid Butter",
    category: "ai"
  },

  onStart: async function({ message, event, args }) {
    let { threadID, messageID } = event;
    let query = args.join(" ");
    if (!query) return api.sendMessage("put text/query", threadID, messageID);

    const directory = path.join(__dirname, 'cache');
    fs.ensureDirSync(directory); 

    let imagePath = path.join(directory, 'poli.png');

    const poli = (await axios.get(`https://image.pollinations.ai/prompt/${query}`, {
      responseType: "arraybuffer",
    })).data;

    fs.writeFileSync(imagePath, Buffer.from(poli, "utf-8"));

    message.reply({
      body: "Here's Your Request Master✅️",
      attachment: fs.createReadStream(imagePath)
    }, threadID, () => fs.unlinkSync(imagePath), messageID);
  }
};