const { writeFileSync } = require("fs-extra");
const fetch = require("node-fetch");

module.exports = {
  config: {
    name: "pokemon",
    version: "1.2",
    author: "Shikaki & Ausum for data & Special thanks to Samir for the idea and basic code structure!",
    countDown: 5,
    role: 0,
    shortDescription: "Run the Pokémon bot",
    longDescription: "Run the Pokémon bot and play a simple Pokémon game",
    category: "🐍 Pokémon",
    guide: {
      en: "{pn} -> This will tell you whether pokébot is on or off in that gc.\n\n{pn} {{[on | off]}} -> This will either turn on or off the pokébot in that gc.",
    },
    message: "🐍 Pokémon Game 🐍\n\nHere are all the available commands:\n{pn}pokemon pokebot\n{pn}pokemon pokebot on\n{pn}pokemon pokebot off\n{pn}pokemon pokedex\n{pn}pokemon pokeinfo \n{pn}pokemon roam",
    pokeboton: "✅ Pokébot is already enabled.\n\nTo disable it, use:\n{pn}pokemon pokebot off",
    pokebotoff: "❌ Pokébot is currently disabled.\n\nTo enable it, use:\n{pn}pokemon pokebot on",
    pokeinfo: "To get information about a Pokémon, use:\n\n{pn}pokémon pokeinfo pokemon-name\n\nE.g\n\n{pn}pokemon pokeinfo pikachu"
  },

  onStart: async function ({ message, args, event, threadsData, prefix, api }) {
    if (!args[0]) {
      return message.reply(module.exports.config.message.replace(/{pn}/g, prefix));
    }
    const command = args[0];
    switch (command) {
      case "pokebot":
        try {
          if (!args[1]) {
            const pokebot = await threadsData.get(event.threadID, "settings.pokebot");
            if (pokebot) {
              return message.reply(module.exports.config.pokeboton.replace(/{pn}/g, prefix));
            } else {
              return message.reply(module.exports.config.pokebotoff.replace(/{pn}/g, prefix));
            }
          }

          if (!["on", "off"].includes(args[1])) return message.reply("Turn on or off 🌝?");

          await threadsData.set(event.threadID, args[1] === "on", "settings.pokebot");

          return message.reply(`🐍✅ Pokébot has been ${args[1] === "on" ? "enabled" : "disabled"}`);
        } catch (error) {
          console.error("Error in onStart:", error);
          message.reply("An error occurred. Please try again later.");
        }
        break;

      case "pokeinfo":
        if (args[1]) {
          const pokebot = await threadsData.get(event.threadID, "settings.pokebot");
          if (!pokebot) {
            return message.reply("🥲 Pokébot is currently disabled. To use this command, you need to turn on Pokébot first.");
          }

          const pokemonName = args[1].toLowerCase();
          const pokos = await fetchPokemonData();
          const pokemonData = pokos.find((pokemon) => pokemon.name.toLowerCase() === pokemonName);

          if (pokemonData) {
            try {
              const image = pokemonData.image || "";
              if (typeof image === "string" && image.trim() !== "") {
                const form = {
                  body: `❏ Name: ${pokemonData.name}\n❏ Type: ${pokemonData.type}\n❏ HP: ${pokemonData.HP}\n❏ Attack: ${pokemonData.Att}\n❏ Defense: ${pokemonData.Def}\n❏ Attack Speed: ${pokemonData["Attack speed"]}\n❏ Defense Speed: ${pokemonData["Defence speed"]}\n❏ Speed: ${pokemonData.Speed}\n❏ Abilities: ${pokemonData.Abilities}`,
                  attachment: await global.utils.getStreamFromURL(image),
                };
                return message.reply(form);
              } else {
                return message.reply("No valid image found for this Pokémon.");
              }
            } catch (e) {
              console.error(e);
              return message.reply("Server busy. Please try again later.");
            }
          } else {
            return message.reply(`Pokeémon with the name "${args[1]}" not found.`);
          }
        } else {
          return message.reply(module.exports.config.pokeinfo.replace(/{pn}/g, prefix));
        }
        break;

      case "pokedex":
        const pokebot = await threadsData.get(event.threadID, "settings.pokebot");
        if (!pokebot) {
          return message.reply("🥲 Pokébot is currently disabled. To use this command, you need to turn on Pokébot first.");
        }

        const pokedbPath = 'pokedb.json';
        let pokedb;

        if (fs.existsSync(pokedbPath)) {
          pokedb = JSON.parse(fs.readFileSync(pokedbPath, 'utf8'));
        } else {
          pokedb = { users: {} };
          fs.writeFileSync(pokedbPath, JSON.stringify(pokedb, null, 2), 'utf8');
        }

        const senderID = event.senderID;

        let pageNumber = args[1] ? parseInt(args[1]) : 1;

        if (pageNumber < 1) {
          return message.reply("You have entered an invalid page number. Please try again.");
        }

        let userPokedex = pokedb.users[senderID]?.pokemons || [];

        userPokedex = userPokedex.sort((a, b) => a.localeCompare(b));
        const totalPages = Math.max(Math.ceil(userPokedex.length / 20), 1);

        if (userPokedex.length === 0) {
          return message.reply("😔 You don't have any Pokémon in your Pokédex.");
        }

        if (pageNumber > totalPages) {
          return message.reply("😔 You don't have any more Pokémon to show.");
        }

        const formattedPokemonNames = formatMessage(userPokedex, pageNumber, totalPages);
        const reply = `🔥 Your Pokédex:\n\n${formattedPokemonNames}`;
        return message.reply(reply);
        break;

      case "roam":
        api.getUserInfo(event.senderID, async (err, userInfo) => {
          if (err) {
            return message.reply("Failed to retrieve user information.");
          }

          let roamEmoji;
          let genderText;

          switch (userInfo[event.senderID].gender) {
            case 1:
              roamEmoji = "🚶‍♀️";
              break;
            case 2:
              roamEmoji = "🚶‍♂️";
              break;
            default:
              roamEmoji = "👽";
          }

          message.reply(`${roamEmoji} Roaming in the wild...`);

          setTimeout(async () => {
            const randomNumber = Math.floor(Math.random() * 10) + 1;

            if (randomNumber <= 9) {
              const pokos = await fetchPokemonData();
              const randomPokemon = pokos[Math.floor(Math.random() * pokos.length)];

              if (randomPokemon) {
                const form = {
                  body: `‼️ You have encountered a wild Pokémon!\nHere are a list of actions you can do currently:\n\n👊 Fight (1)\n🎒 Items (2)\n🐍 Pokémon (3)\n${roamEmoji} Run (4)\n🔍 Use pokedex (5)\n\nReply this message with 1 or 2 or 3 or 4 depending on what you want to do.`,
                  attachment: await global.utils.getStreamFromURL(randomPokemon.image),
                };
                return message.reply(form);
              }
            } else {
              message.reply("🌳 You continue your peaceful roam, without encountering any wild Pokémon.");
            }
          });
        });
        break;

      default:
    }
  },

  onChat: async function ({ message, args, event, threadsData }) {
  },
};

function formatMessage(pokemonArray, pageNumber, totalPages) {
  const maxDisplay = 20;
  const startIndex = (pageNumber - 1) * maxDisplay;
  const endIndex = startIndex + maxDisplay;
  const pokemonSubset = pokemonArray.slice(startIndex, endIndex);

  let formattedNames = '';
  const sortedPokemons = pokemonSubset.sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < sortedPokemons.length; i++) {
    const pokemonName = sortedPokemons[i];
    formattedNames += `${startIndex + i + 1}. ${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}\n`;
  }

  if (pageNumber < totalPages) {
    formattedNames += `\nTo see more Pokémon, use "pokedex ${pageNumber + 1}".`;
  } else {
    formattedNames += "\nYou don't have any more Pokémon to show. 😔";
  }

  formattedNames += ` (Page ${pageNumber}/${totalPages})`;

  return formattedNames;
}

async function fetchPokemonData() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/theone2277/pokos/main/pokeData");
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Failed to fetch Pokémon data: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return [];
  }
}