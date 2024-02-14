const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
    config: {
        name: "joke",
        version: "1.0",
        author: "Shikaki",
        countDown: 5,
        role: 0,
        shortDescription: {
            en: "Get a random joke."
        },
        longDescription: {
            en: "Get a random joke from JokeAPI. You can specify a category like 'programming' or 'nsfw'."
        },
        category: "😄 Fun",
        guide: {
            en: "{pn} joke [category]"
        }
    },

    onStart: async function ({ message, args }) {
        try {
            // Define the default joke category
            let jokeCategory = 'Any';

            // Check if the user specified a category
            if (args[0]) {
                jokeCategory = args[0];
            }

            // Fetch a random joke from JokeAPI based on the specified category
            const jokeResponse = await axios.get(`https://v2.jokeapi.dev/joke/${jokeCategory}`);
            const jokeData = jokeResponse.data;

            if (jokeData) {
                // Create a reply message with the joke
                let replyMessage = `😄 Here's a random ${jokeCategory === 'Any' ? 'joke' : `${jokeCategory} joke`} for you:\n`;

                // Check the flags in the joke data
                if (jokeData.flags) {
                    if (jokeData.flags.explicit) {
                        replyMessage += "⚠️ This joke is explicit.\n";
                    }
                    if (jokeData.flags.sexist) {
                        replyMessage += "⚠️ This joke is sexist.\n";
                    }
                }

                // Add the joke setup and delivery
                if (jokeData.setup && jokeData.delivery) {
                    replyMessage += `\n${jokeData.setup}\n${jokeData.delivery}`;
                } else if (jokeData.joke) {
                    replyMessage += jokeData.joke;
                }

                // Send the joke as a reply
                message.reply(replyMessage);
            } else {
                message.reply("😐 Unable to fetch a joke at the moment.");
            }
        } catch (error) {
            console.error("Error fetching or processing joke:", error.message);
            message.reply("❌ An error occurred while fetching the joke. Please try again later.");
        }
    }
};