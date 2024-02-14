
const axios = require('axios');
const bitlyTokens = [
 '2bc6588758568de8ec6ee4367716019cc3a2943f',
 '82712b5df67072416a4e50a1d04de5c09bb9ddba',
 '9841d7e398331391a32ac914f8f369282724c129',
 '2a39769672c0a11afc03511fc620c413ec41343c',
 '4dfd3adf419a8b812280b89d12d752e31ad6ee51',
 'cf46d90eebe813d185fff4f0ee22ea8beebbe2ca',
 'f327089e4faa6d836fc4406cec1818258eb14b30',
 '9b2abc041dcab6fa9bcb5c7ee99e1de9ed5bb663'
];

const urlmap = {}; // Object to store shortened URLs

// Function to shorten a URL
async function shortenURL(longUrl, currentIndex = 0) {
 try {
 const response = await axios.post('https://api-ssl.bitly.com/v4/shorten', {
 long_url: longUrl,
 }, {
 headers: {
 'Authorization': `Bearer ${bitlyTokens[currentIndex]}`,
 'Content-Type': 'application/json',
 },
 });

 const shortenedLink = response.data.link;
 return shortenedLink;
 } catch (error) {
 console.error(`Error with API key ${bitlyTokens[currentIndex]}`);
 // If there's an error, try the next API key if available
 if (currentIndex < bitlyTokens.length - 1) {
 return shortenURL(longUrl, currentIndex + 1);
 }
 // If all API keys fail, handle the error accordingly
 throw new Error("❌ | All API keys failed to shorten the URL. Please add an API KEY or replace all API keys");
 }
}

module.exports = {
 config: {
 name: "bitly",
 version: "1.1",
 author: "Blake Cyphrus",
 shortDescription: "Can shorten a long link",
 longDescription: "Can shorten a long link",
 category: "utility",
 usages: ["<longUrl>"],
 countDowns: 2,
 role: 0,
 },

 onStart: async function ({ api, event, args }) {
 const longUrl = args[0];

 if (!longUrl || !longUrl.startsWith("https://")) {
 api.sendMessage("❎ | Oops! It looks like you didn't provide a valid link in the format '#bitly https://example.com'. Please try again.", event.threadID, event.messageID);
 return;
 }

 if (urlmap[longUrl]) {
 api.sendMessage(`🤔 | The URL you're trying to shorten is already exist.\Here is the existing shortened link: \\${urlmap[longUrl]}`, event.threadID);
 return;
 }

 api.sendMessage("⌛ | Shortening your link... Please wait...", event.threadID);

 setTimeout(async () => {
 try {
 const shortenedUrl = await shortenURL(longUrl);
 urlmap[longUrl] = shortenedUrl; // Store the shortened URL
 api.sendMessage(`✅ | Shortened URL:\\ ${shortenedUrl}`, event.threadID);
 } catch (error) {
 api.sendMessage(`Error: ${error.message}`, event.threadID);
 }
 }, 10000);
 },
};