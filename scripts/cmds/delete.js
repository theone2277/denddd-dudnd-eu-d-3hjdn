const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "del",
    aliases: ["d"],
    version: "1.0",
    author: "Isami",
    countDown: 5,
    role: 2,
    shortDescription: "Delete file and folders",
    longDescription: "Delete file",
    category: "owner",
    guide: "{pn}"
  },

  onStart: async function ({ args, message, event }) {
    const permission = ["61552185460908", "100082303772872"];
    if (!permission.includes(event.senderID)) {
      message.reply("Filthy human! Only my real owner can do this!");
      return;
    }
    const commandName = args[0];

    if (!commandName) {
      return message.reply("Type the file name..");
    }

    const filePath = path.join(__dirname, '..', 'cmds', commandName);

    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        message.reply("✅ | A command file has been deleted: " + commandName + " !!");
      } else {
        message.reply("Command file " + commandName + " unavailable!!");
      }
    } catch (err) {
      console.error(err);
      message.reply("Cannot be deleted because " + commandName + ": " + err.message);
    }
  }
};