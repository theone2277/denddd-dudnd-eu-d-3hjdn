module.exports = {
	config: {
		name: "pokebal",
		aliases: ["pokecoins", "pokecoin"],
		version: "1.0",
		author: "Shikaki",
		countDown: 5,
		role: 0,
		shortDescription: {
			en: "view your PokéCoins"
		},
		longDescription: {
			en: "view your PokéCoins or the PokéCoins of the tagged person"
		},
		category: "economy",
		guide: {
			en: "   {pn}: view your PokéCoins"
				+ "\n   {pn} <@tag>: view the PokéCoins of the tagged person"
		}
	},

	langs: {
		en: {
			pokecoins: "Your PokéCoins:\n\nP%1",
			pokecoinsOf: "%1's PokéCoins:\n\nP%2"
		}
	},

    onStart: async function ({ message, usersData, event }) {
        if (Object.keys(event.mentions).length > 0) {
            const uids = Object.keys(event.mentions);
            let msg = "";
            for (const uid of uids) {
                const userPokeCoins = (await usersData.get(uid, "pokecoin")) ?? 0;
                msg += `${event.mentions[uid]}'s PokéCoins:\n\nP${userPokeCoins}\n`;
            }
            return message.reply(msg);
        }
        const userData = await usersData.get(event.senderID);
        const userPokeCoins = userData.pokecoin ?? 0;
        message.reply(`Your PokéCoins:\n\nP${userPokeCoins}`);
    }
};