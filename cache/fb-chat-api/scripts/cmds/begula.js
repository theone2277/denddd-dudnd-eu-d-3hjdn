module.exports = {
 config: {
 name: "beluga",
 version: "1.0",
 author: "XyryllPanget",
 countDown: 5,
 role: 0,
 shortDescription: "beluga cat",
 longDescription: "belugaaaaa cat",
 category: "no prefix",
 }, 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "beluga") {
 return message.reply({
 body: "pusa na naman tangina ka meow🐱",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/5ZMQzkl.jpg")
 });
 }
 }
}