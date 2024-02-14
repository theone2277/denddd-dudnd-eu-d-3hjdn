const fs = require('fs-extra');
const path = require('path');

module.exports = {
  config: {
    name: "send",
    aliases: [],
    version: "1.0",
    author: "kshitiz",
    countDown: 2,
    role: 0,
    shortDescription: "Send files from the folder",
    longDescription: "Send files from the specified folder as attachments and reply with the files.",
    category: "anime",
    guide: "{pn} send"
  },

  onStart: async function ({ message, event }) {
    const folderPath = 'scripts/cmds/help';

    try {
      const files = await fs.readdir(folderPath);
      if (files.length === 0) {
        message.reply("No files found in the folder.", event.threadID);
        return;
      }

      const attachments = [];

      for (const file of files) {
        const filePath = path.join(folderPath, file);
        const fileStream = fs.createReadStream(filePath);
        attachments.push(fileStream);
      }

      // Prepare the message content
      const messageContent = {
        body: "Here are the files you requested:",
        attachment: attachments
      };

      // Send the message with text and attachments
      message.reply(messageContent, event.threadID);
    } catch (error) {
      console.error("Error sending files:", error);
      message.reply("An error occurred while sending the files.", event.threadID);
    }
  }
};
