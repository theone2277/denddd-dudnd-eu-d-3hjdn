module.exports = {
	config: {
		name: "luffy",
		aliases: ["joyboy"],
		version: "1.0",
		author: "Ass-win",
		countDown: 5,
		role: 0,
		shortDescription: "Send you the images of Luffi.",
		longDescription: "Send you the images of Luffi.",
		category: "images",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [ "https://i.imgur.com/sNO5O7f.jpg",

"https://i.imgur.com/giWfMET.jpg",

"https://i.imgur.com/7cZQZfm.jpg",

"https://i.imgur.com/Nj6rDMk.jpg",

"https://i.imgur.com/wlGRduu.jpg",

"https://i.imgur.com/prbelaQ.jpg",

"https://i.imgur.com/Vqb8nyN.jpg",

"https://i.imgur.com/eIyX4so.jpg","",

"https://i.imgur.com/kFK9rdy.jpg",

"https://i.imgur.com/JU03sNy.jpg",

"https://i.imgur.com/HzdtPrd.jpg",

"https://i.imgur.com/8M9m6lO.jpg",

"https://i.imgur.com/7bLxygm.jpg"

]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '「 Monkey De. Luffi! 」',attachment: await global.utils.getStreamFromURL(img)
})
}
     }