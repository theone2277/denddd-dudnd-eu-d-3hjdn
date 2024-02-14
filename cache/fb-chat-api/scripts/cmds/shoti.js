module.exports = {
  config: {
    name: "shoti",
    version: "1.0",
    author: "XyryllPanget",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "",
    },
    longDescription: {
      vi: "",
      en: "",
    },
    category: "chatbox",
    guide: {
      vi: "",
      en: "",
    },
  },

  langs: {
    // ... (Your existing translations)
  },

  onStart: async function ({ api, event }) {
    api.sendMessage("🕣 𝙎𝙚𝙣𝙙𝙞𝙣𝙜...", event.threadID);
    const axios = require("axios");
    const request = require('request');
    const fs = require("fs");

    try {
      const { data } = await axios.get('https://shoti-api.libyzxy0.repl.co/api/get-shoti?apikey=shoti-1hcbinvdke6auiv18p');
      const file = fs.createWriteStream(__dirname + "/cache/shoti.mp4");
      const rqs = request(encodeURI(data.data.url));
      console.log('Shoti Downloaded >>> ' + data.data.id);

      await new Promise((resolve, reject) => {
        rqs.pipe(file);
        file.on('finish', () => {
          resolve();
        });
        file.on('error', (error) => {
          reject(error);
        });
      });

      api.sendMessage({
        body: `@${data.user.username}`,
        attachment: fs.createReadStream(__dirname + '/cache/shoti.mp4')
      }, event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while fetching the video.", event.threadID);
    }
  },
};