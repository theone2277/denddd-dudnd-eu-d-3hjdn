
const figlet = require('figlet');

module.exports = {
  config: {
    name: "ascii",
    aliases: ["textart", "figlet"],
    version: "1.0",
    role: 0,
    author: "Riley",
    shortDescription: "Create ASCII art from text",
    longDescription: "Create cool ASCII art from the provided text.",
    category: "fun",
    guide: { en: "{pn} <text>" },
  },
  onStart: async function ({ message, args }) {
    const text = args.join(" ");

    if (!text) {
      return message.reply("Please provide the text you want to convert into ASCII art.");
    }

    figlet.text(text, function (error, data) {
      if (error) {
        console.error(error);
        return message.reply("An error occurred while creating ASCII art.");
      }

      message.reply("Here's your ASCII art:\n```\n" + data + "\n```");
    });
  },
};