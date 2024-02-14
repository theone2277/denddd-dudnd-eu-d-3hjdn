const axios = require("axios");

module.exports = {
  config: {
    name: "imagine",
    version: "2.0",
    author: "Samir Thakuri",
    countDown: 5,
    role: 0,
    shortDescription: "Generate Images.",
    longDescription: "Featuring Image Generator AI with Prompt Style and Ratio.",
    category: "ai",
    guide: {
      en: "{pn} <prompt>\n",
    },
  },
  onStart: async function ({ api, event, args, message }) {
    try {
      const [prompt] = args.join(' ').split('|').map(part => part.trim());

      if (!prompt) {
        return message.reply("⚠️| Invalid input. Please provide a prompt.");
      }
      let apiUrl = `https://api.samirthakuri.repl.co/generate?prompt=${encodeURIComponent(prompt)}`;

      const creatingMessage = await message.reply('⏳| Generating Image...\nPlease Wait A Moment.');

      const form = {
        body: `Here's your imagination 🖼️.`
      };

      form.attachment = [];
      form.attachment[0] = await global.utils.getStreamFromURL(apiUrl);
      api.unsendMessage(creatingMessage.messageID);
      
      message.reply(form);
    } catch (error) {
      console.error(error);
      message.reply("An error occurred while fetching response");
    }
  }
};