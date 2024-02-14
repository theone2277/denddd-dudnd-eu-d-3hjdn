const fs = require('fs');

module.exports = {
    config: {
        name: "pokeshop",
        version: "1.0",
        author: "Shikaki",
        countDown: 5,
        role: 0,
        shortDescription: {
            en: "View the Poké Shop"
        },
        longDescription: {
            en: "View the Poké Shop and buy various items related to only View the Pokémon universe."
        },
        category: "🐍 Pokémon",
        guide: {
            en: "{pn} -> Gives you a list of all available shop commands\n{pn} list -> Shows list of all items in Poké Shop\n{pn} buy <item-number> -> Buy an item"
        },
    args0: "━━━🐍Poké Shop🐍━━━\n\nHere are all the avavilble commands:\n\n{pn}pokeshop list\n{pn}pokeshop buy <item-number>\n\n🐍━━━━━━━━━━━━━🐍",
    noItemNumber: "⚠️ Please provide an item number after {pn}pokeshop buy\n\nE.g.\n\n{pn}pokeshop buy 1"
    },

    onStart: async function ({ message, role, args, commandName, event, threadsData, prefix }) {
        if (!args[0]) {
            return message.reply(module.exports.config.args0.replace(/{pn}/g, prefix));
        }
        else if (args[0] === "list")
        {
            fs.readFile('pokeShop.json', 'utf8', (err, data) => {
                if (err) {
                    if (err.code === 'ENOENT') {
                        message.reply("The file 'pokeShop.json' does not exist.");
                    } else {
                        message.reply("An error occurred while reading the file.");
                    }
                    return;
                }

                try {
                    const jsonData = JSON.parse(data);
                    const items = jsonData.items;

                    let pokeShopmessage = "━━━🐍Poké Shop🐍━━━\n";

                    items.forEach(item => {
                        pokeShopmessage += `Item Name: ${item.name}\n`;
                        pokeShopmessage += `Item Detail: ${item.detail}\n`;
                        pokeShopmessage += `Price in Dollar: ${item.priceInDollar}\n`;
                        pokeShopmessage += `Price in Dollar in Words: ${item.priceOfDollarInWords}\n`;
                        pokeShopmessage += `Price in PokeCoins: ${item.priceInPokeCoins}\n`;
                        pokeShopmessage += `Price of PokeCoins in Words: ${item.priceOfPokeCoinsInWords}\n`;
                        pokeShopmessage += "🐍━━━━━━━━━━━━━━━━━🐍";
                    });

                    message.reply(pokeShopmessage);
                } catch (parseError) {
                    message.reply("An error occurred while parsing the JSON data.");
                }
            });
        }
         else if (args[0] === "buy") {
            if (!args[1]) {
                return message.reply(module.exports.config.noItemNumber.replace(/{pn}/g, prefix));
            }

            fs.readFile('pokeShop.json', 'utf8', (err, data) => {
                if (err) {
                    if (err.code === 'ENOENT') {
                        message.reply("The file 'pokeShop.json' does not exist.");
                    } else {
                        message.reply("An error occurred while reading the file.");
                    }
                    return;
                }

                try {
                    const jsonData = JSON.parse(data);
                    const items = jsonData.items;

                    const itemNumber = parseInt(args[1], 10);

                    if (itemNumber <= 0 || itemNumber > items.length) {
                        return message.reply("⚠️ Invalid item number. Please provide a valid item number.");
                    }

                    const selectedItem = items[itemNumber - 1];

                    let pokeShopmessage = "━━━🐍Poké Shop🐍━━━\n";
                    pokeShopmessage += `You selected: ${selectedItem.name}\n`;
                    pokeShopmessage += `Item Detail: ${selectedItem.detail}\n`;
                    pokeShopmessage += `Price in Dollar: ${selectedItem.priceInDollar}\n`;
                    pokeShopmessage += `Price in Dollar in Words: ${selectedItem.priceOfDollarInWords}\n`;
                    pokeShopmessage += `Price in PokeCoins: ${selectedItem.priceInPokeCoins}\n`;
                    pokeShopmessage += `Price of PokeCoins in Words: ${selectedItem.priceOfPokeCoinsInWords}\n`;
                    pokeShopmessage += "🐍━━━━━━━━━━🐍";

                    message.reply(pokeShopmessage);
                } catch (parseError) {
                    message.reply("An error occurred while parsing the JSON data.");
                }
            });
        }
    }
};
