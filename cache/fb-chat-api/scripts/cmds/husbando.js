const axios = require('axios');
const fs = require('fs');
const { config } = global.GoatBot;
const path = require('path');

module.exports = {
  config: {
    name: "husbando",
    aliases: ["male"],
    version: "1.1",
    author: "Ass-win",
    countDown: 5,
    role: 0,
    shortDescription: "sends your husbando pics",
    longDescription: "",
    category: "images",
    guide: "{pn}"
  },
  
  // Function to get a random image from various sources
  getRandomImage: async function () {
    // Choose a random source (0, 1, or 2)
    const randomSource = Math.floor(Math.random() * 3);
    // Folder path to store local images
    const folderPath = 'scripts/cmds/husbando';
  
    // Ensure the folder exists, create if not
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
  
    // Get a list of files in the folder
    const files = fs.readdirSync(folderPath);
  
    // If the random source is 0, return a random link from the predefined list
    if (randomSource === 0) {
      const link = [ /* List of image links */ ];
      return link[Math.floor(Math.random() * link.length)];
    } 
    // If the random source is 1, return a random local file if available, else recursively call getRandomImage
    else if (randomSource === 1) {
      if (files.length === 0) {
        return await this.getRandomImage();
      }
      const randomFile = files[Math.floor(Math.random() * files.length)];
      return path.join(folderPath, randomFile);
    } 
    // If the random source is 2, fetch an image from an external API if available, else recursively call getRandomImage
    else {
      try {
        if (files.length === 0) {
          return await this.getRandomImage();
        }
        const response = await axios.get('https://nekos.best/api/v2/husbando');
        const imageURL = response.data.results[0].url;
        return imageURL;
      } catch (error) {
        console.error("Error fetching image from API:", error.message);
        return null;
      }
    }
  },
  
  // Function to execute when the command starts
  onStart: async function ({ message, event, args }) {
    // If no arguments, send a random image
    if (!args[0]) {
      const img = await this.getRandomImage();
      if (img) {
        message.send({
          body: '「 Your Husbando 」', attachment: await global.utils.getStreamFromURL(img)
        });
      } else {
        message.reply("❌ An error occurred while fetching the image.");
      }
    }

    // If argument is "file", handle file-related logic
    if (args[0] === "file") {
      const isAdmin = config.adminBot.includes(event.senderID);
      // Check if the user is an admin
      if (!isAdmin) {
        message.reply("❌ You need to be an admin of the bot.");
      } else {
        // If "file" is specified, check if a valid attachment URL is provided
        const fileUrl = event.messageReply && event.messageReply.attachments[0].url;
        if (!fileUrl) {
          return message.reply("❌ No valid attachment found.");
        }

        // Folder path to save downloaded files
        const folderPath = 'scripts/cmds/husbando';
        // Ensure the folder exists, create if not
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }

        try {
          // Fetch the file using axios
          const response = await axios.get(fileUrl, {
            responseType: "arraybuffer",
            headers: {
              'User-Agent': 'axios'
            }
          });

          // Determine file type from content type
          const contentType = response.headers['content-type'];
          if (contentType.includes('image')) {
            // If image, save as 'image.jpg'
            const imagePath = path.join(folderPath, 'image.jpg');
            fs.writeFileSync(imagePath, Buffer.from(response.data, 'binary'));
          } else if (contentType.includes('video') || contentType.includes('gif')) {
            // If video or gif, save as 'media.mp4' or 'media.gif' based on content type
            const ext = contentType.includes('video') ? '.mp4' : '.gif';
            const mediaPath = path.join(folderPath, 'media' + ext);
            fs.writeFileSync(mediaPath, Buffer.from(response.data, 'binary'));
          } else {
            // If invalid attachment format, reply with an error message
            return message.reply("❌ Invalid attachment format. Reply only with an image, video, or gif");
          }

          // Reply with success message
          message.reply("✅ File saved successfully.");
        } catch (error) {
          console.error("Error downloading image:", error.message);
          message.reply("❌ An error occurred while downloading the image.");
        }
      }
    } 
    // If argument is "link", handle link-related logic
    else if (args[0] === "link") {
      const isAdmin = config.adminBot.includes(event.senderID);
      // Check if the user is an admin
      if (!isAdmin) {
        return message.reply("❌ You need to be an admin of the bot.");
      } else {
        // Check if a valid image link is provided
        if (!args[1]) {
          return message.reply("❌ Please provide a valid image link.");
        }

        // Image link provided by the user
        const imageLink = args[1];
        // Folder path to save downloaded files
        const folderPath = 'scripts/cmds/husbando';

        // Ensure the folder exists, create if not
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }

        try {
          // Fetch the image from the provided link
          const response = await axios.get(imageLink, { responseType: 'arraybuffer' });
          const imageData = Buffer.from(response.data, 'binary');

          // Determine file type from content type
          const ext = response.headers['content-type'].split('/')[1];
          // Save the image with a unique name based on the timestamp
          const imageName = `husbando_${Date.now()}.${ext}`;
          const imagePath = path.join(folderPath, imageName);

          fs.writeFileSync(imagePath, imageData);
          // Reply with success message including the downloaded image's name
          message.reply(`✅ Image ${imageName} downloaded.`);
        } catch (error) {
          // Reply with an error message if an issue occurs during the download
          message.reply("❌ An error occurred while downloading the image.");
        }
      }
    } else {
      // If no matching condition is met, do nothing
      return;
    }
  }
};
