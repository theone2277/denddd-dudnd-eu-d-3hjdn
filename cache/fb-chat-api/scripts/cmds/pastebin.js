const axios = require('axios');

module.exports = {
  config: {
    name: "pastebin",
    version: "1.2",
    author: "Bar, Ported by Shikaki",
    countDown: 20,
    role: 0,
    shortDescription: "Paste your code.",
    longDescription: "Paste your code and get a pastebin link.",
    category: "Utility",
    guide: "{pn} [your code]",
  },

  onStart: async function ({ message, event, args }) {
    let { threadID, messageID } = event;
    let code = args.join(" "); 

    if (!code) {
      message.reply(`Missing input!\nUsage: <prefix> [your code]`, threadID, messageID);
      return;
    }

    message.reply("PLEASE WAIT FOR YOUR LINK🔗🕜", threadID, messageID);

    try {
      const response = await axios.get(`https://sensui-useless-apis.codersensui.repl.co/api/tools/pastebin?text=${encodeURI(code)}`);
      const pastebinUrl = response.data.url;

      message.reply(`HERE'S YOUR PASTEBIN LINK🔗: \n${pastebinUrl}`, threadID, messageID);

    } catch (error) {
      return message.reply(`An error occurred: ${error}`, threadID, messageID);
    }
  }
};
