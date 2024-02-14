const { loadImage, createCanvas } = require("canvas");
const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");

module.exports = {
  config: {
    name: "hack",
    aliases: ["hfb"],
    version: "1.0",
    author: "mhm",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "hack your friend id"
    },
    longDescription: {
      vi: "",
      en: ""
    },
    category: "Image",
    guide: {
      vi: "{pn}",
      en: "{pn}"
    }
  },
  wrapText: async function(ctx, name, maxWidth) {
    return new Promise((resolve) => {
      if (ctx.measureText(name).width < maxWidth) return resolve([name]);
      if (ctx.measureText("W").width > maxWidth) return resolve(null);
      const words = name.split(" ");
      const lines = [];
      let line = "";
      while (words.length > 0) {
        let split = false;
        while (ctx.measureText(words[0]).width >= maxWidth) {
          const temp = words[0];
          words[0] = temp.slice(0, -1);
          if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
          else {
            split = true;
            words.splice(1, 0, temp.slice(-1));
          }
        }
        if (ctx.measureText(`${line}${words[0]}`).width < maxWidth)
          line += `${words.shift()} `;
        else {
          lines.push(line.trim());
          line = "";
        }
        if (words.length === 0) lines.push(line.trim());
      }
      return resolve(lines);
    });
  },

  onStart: async function({ args, usersData, threadsData, api, event }) {
    const pathImg = path.join(__dirname, "cache", "background.png");
    const pathAvt1 = path.join(__dirname, "cache", "Avtmot.png");
    const id = Object.keys(event.mentions)[0] || event.senderID;
    const name = await api.getUserInfo(id);
    const userName = name[id].name;
    const ThreadInfo = await api.getThreadInfo(event.threadID);
    const background = ["https://i.imgur.com/VQXViKI.png"];
    const rd = background[Math.floor(Math.random() * background.length)];

    try {
      let getAvtmot = (
        await axios.get(
          `https://graph.facebook.com/${id}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
          { responseType: "arraybuffer" }
        )
      ).data;
      fs.writeFileSync(pathAvt1, Buffer.from(getAvtmot, "utf-8"));

      let getbackground = (
        await axios.get(rd, {
          responseType: "arraybuffer",
        })
      ).data;
      fs.writeFileSync(pathImg, Buffer.from(getbackground, "utf-8"));

      let baseImage = await loadImage(pathImg);
      let baseAvt1 = await loadImage(pathAvt1);
      let canvas = createCanvas(baseImage.width, baseImage.height);
      let ctx = canvas.getContext("2d");
      ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
      ctx.font = "400 23px Arial";
      ctx.fillStyle = "#1878F3";
      ctx.textAlign = "start";
      const lines = await this.wrapText(ctx, userName, 1160);
      ctx.fillText(lines.join("\n"), 200, 497);
      ctx.beginPath();
      ctx.drawImage(baseAvt1, 83, 437, 100, 101);
      const imageBuffer = canvas.toBuffer();
      fs.writeFileSync(pathImg, imageBuffer);
      fs.removeSync(pathAvt1);

      const imageReadStream = fs.createReadStream(pathImg);

      return api.sendMessage(
        {
          body: " ",
          attachment: imageReadStream,
        },
        event.threadID,
        () => {
          fs.removeSync(pathImg);
        },
        event.messageID
      );
    } catch (error) {
      console.error("Error generating and sending the image:", error);
      return api.sendMessage("An error occurred while generating and sending the image.", event.threadID);
    }
  },
};
