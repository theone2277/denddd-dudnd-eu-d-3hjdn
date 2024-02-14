const wiki = require("wikijs").default;

module.exports = {
  config: {
    name: "wiki",
    author: "junjam",
    countDown: 5,
    role: 0,
    category: "utility",
    shortDescription: {
      en: "wiki",
    },
  },
  langs: {
    en: {
      missingInput: "Enter what you need to search for.",
      returnNotFound: "Can't find %1",
    },
  },
  onStart: async function ({ event, message, getLang, usersData, args }) {
    let content = args.join(" ");
    let url = "https://en.wikipedia.org/w/api.php"; // Set English Wikipedia
    if (!content) {
      return message.reply(getLang("missingInput", event.threadID, event.messageID));
    }
    try {
      const page = await wiki({ apiUrl: url }).page(content);
      const summary = await page.summary();
      return message.reply(summary, event.threadID, event.messageID);
    } catch (error) {
      return message.reply(getLang("returnNotFound", content), event.threadID, event.messageID);
    }
  },
};