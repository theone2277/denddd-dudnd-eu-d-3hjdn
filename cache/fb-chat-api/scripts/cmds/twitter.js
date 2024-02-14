const axios = require('axios');
const twitterDownloader = require('twitter-downloader');

module.exports = {
    config: {
        name: "twittervideo",
        version: "1.0",
        author: "Shikaki",
        countDown: 30,
        role: 0,
        shortDescription: "Twitter Video Downloader",
        longDescription: "Download Twitter Videos by URL",
        category: "utility",
        guide: "{pn}twittervideo <Twitter Video URL>",
    },

    onStart: async function ({ message, args }) {
        const url = args.join(" ");
        if (!url) {
            return message.reply("Missing Twitter Video URL to download.");
        } else {
            await message.reply("Please wait while we fetch the Twitter video. 🕐");

            try {
                const videoInfo = await twitterDownloader.getInfo(url);
                if (videoInfo && videoInfo.variants && videoInfo.variants.length > 0) {
                    const videoURL = videoInfo.variants[0].url;
                    const videoTitle = videoInfo.title || "Twitter Video";
                    const form = {
                        body: `Here's your Twitter video: ${videoTitle} 📽️`,
                    };
                    form.attachment = await global.utils.getStreamFromURL(videoURL);
                    message.reply(form);
                } else {
                    message.reply("No video found in the provided Twitter URL.");
                }
            } catch (e) {
                message.reply("An error occurred while fetching the Twitter video.");
                console.error(e);
            }
        }
    }
};
