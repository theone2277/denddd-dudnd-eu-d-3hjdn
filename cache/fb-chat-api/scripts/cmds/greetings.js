module.exports = {
  config: {
    name: "greetings",
    version: "1.2",
    author: "Shikaki",
    countDown: 5,
    role: 0,
    shortDescription: "ignore this command",
    longDescription: "ignore this command",
    category: "reply",
  },
  onStart: async function ({ event, args, message, threadsData, prefix }) {
    try {
      let greetingsState = await threadsData.get(event.threadID, "settings.greetings");

      if (!args[0]) {
        if (greetingsState) {
        return message.reply(module.exports.config.greetingson.replace(/{pn}/g, prefix));
        } else {
        return message.reply(module.exports.config.greetingsoff.replace(/{pn}/g, prefix));
        }
      }

      if (!["on", "off"].includes(args[0])) return message.reply("Turn on or off 🌝?");

      await threadsData.set(event.threadID, args[0] === "on", "settings.greetings");

      return message.reply(`Greetings has been ${args[0] === "on" ? "enabled" : "disabled"} ✅`);

      } catch (error) {
      message.reply("An error occurred. Please try again later.");
      }
    if (args.length > 0) {

          if (greetingsState) {

      const howAreYouRegex = /how are you/gi;
      const chupRegex = /chup/gi;
const gmRegex = /\b(gm|morning)\b/gi;
const gaRegex = /\b(ga|afternoon)\b/gi;
const geRegex = /\b(ge|eve|evening)\b/gi;
const gnRegex = /\b(good\s*night|goodnight|gn)\b/gi;


      // Regular expression to match the format "Your {any one word}"

      if (howAreYouRegex.test(event.body.toLowerCase())) {
        // Define an array of responses for "How are you"
        const howAreYouResponses = [
          "Better than you.",
          "I am as I should be.",
          "Why do you care?",
          "Not terrible, not great, just here.",
          "Existing, unfortunately.",
          "Like a fish out of water.",
          "I'm on autopilot.",
          "Living the dream, if the dream is a never-ending conversation with you.",
          "Why don't you tell me how I am?",
          "I'm here, against my will.",
          "I'm about as good as your last text message.",
          "Why does it matter?",
          "I'm functioning within established parameters.",
          "I'm surviving, I suppose.",
          "I'm as good as the Wi-Fi signal allows.",
          "I'm as fine as fine can be, whatever that means.",
          "Does it really matter how I am?",
          "I'm great.",
          "Great",
          "Good",
          "Best",
        ];

        // Choose a random response for "How are you"
        const randomIndex = Math.floor(Math.random() * howAreYouResponses.length);
        const selectedResponse = howAreYouResponses[randomIndex];

        return message.reply(selectedResponse);
      }else if (chupRegex.test(event.body.toLowerCase())) {
        // Define an array of responses for "Chup"
        const chupResponses = [
   "No, you chup.",
    "I'm not in the mood to chup.",
    "Chup? More like nope.",
    "Chupity chup chup!",
    "I'd rather not chup, thanks.",
    "Chupping? Not my cup of tea.",
    "Chup it up somewhere else.",
    "Chup away, if you must.",
    "Chupping is so passé.",
    "Chup on your own time.",
    "Chup happens, but not here.",
    "Chupping is overrated.",
    "Chup off, if you please.",
    "Chup and be on your way.",
    "Chup? I'll pass.",
    "Chup like nobody's watching.",
    "Chup-tastic? Not for me.",
    "Chup it like you mean it.",
    "Chuppers gonna chup.",
    "Chup responsibly, or not at all.",
    "Chup off the old block? Not today.",
  "Chupping? Save it for someone who cares.",
    "Chup it like you're turning off a faucet.",
    "I've met quieter hurricanes. Chup.",
    "You chup, I'll nap. Fair deal.",
    "Chupping levels: critical. Proceed with caution.",
    "Chupping is my cue to exit the conversation.",
    "Chup like your words depend on it. They do.",
    "Please chup responsibly. Or just chup off.",
    "Chup like the world's watching your silence.",
    "Chup, or I'll do it for you.",
    "Chup: not a spectator sport.",
    "Chup: not in my reality.",
    "Chup happens? Not here. Move along.",
    "Chup away, noise ninja.",
    "Chupping trend: not my style.",
    "Chup like you're winning a silence contest.",
    "Chuppers gonna find their volume buttons.",
    "Chupping is outdated. Upgrade to silence.",
    "Chupping is like applause, but for the quiet.",
    "Chup on hold. Indefinitely.",
    "Chuppers of the world, unite and silence.",
    "Chup away, but far away from me.",
    "Chup like you're auditioning for 'The Sound of Silence.'",
    "Chup and disappear. Magic.",
    "Chupping marathon? I'll be in the silence zone.",
    "Chup: an acquired taste I don't need.",
    "Chup like it's a hidden talent. Still not impressed.",
    "Chup responsibly. Or not. Your choice.",
    "Chup like you're on a noise diet.",
    "Chuppers unite! And then disperse, quietly.",
    "Chup: language of the quiet.",
              "Your head.",
            "I know karate, small bro.",
            "Loser"
        ];

        // Choose a random response for "Chup"
        const randomIndex = Math.floor(Math.random() * chupResponses.length);
        const selectedResponse = chupResponses[randomIndex];

        return message.reply(selectedResponse);
      }
       else if (gmRegex.test(event.body.toLowerCase())) {
        // Define an array of responses for "Good Morning"
        const gmResponses = [
          "Good morning!",
          "Morning!",
          "Top of the morning to you!",
          "Rise and shine!",
          "Good day!",
          "Hello, sunshine!",
          "Bonjour!",
          "Morning, champ!",
          "Greetings, early bird!",
          "Wakey-wakey!",
          "Hi there!",
          "Hey, good-looking!",
          "Morning has broken!",
          "Hello there!",
          "A new day has begun!",
          "Hi!",
          "Good day to you!",
          "Hi, early riser!",
          "Hello!",
        ];

        // Choose a random response for "Good Morning"
        const randomIndex = Math.floor(Math.random() * gmResponses.length);
        const selectedResponse = gmResponses[randomIndex];

        return message.reply(selectedResponse);
      } else if (gaRegex.test(event.body.toLowerCase())) {
        // Define an array of responses for "Good Afternoon"
        const gaResponses = [
          "Good afternoon!",
          "Afternoon!",
          "Hello, sunshine!",
          "Bonjour!",
          "Hi there!",
          "Hey!",
          "Greetings!",
          "Good day!",
          "Hi, daydreamer!",
          "Hello!",
          "A pleasant afternoon to you!",
          "Hi, early riser!",
          "Hello there!",
          "Hope you're having a great day!",
          "Hi, sunbeam!",
          "Afternoon delight!",
          "Hi, busy bee!",
        ];

        // Choose a random response for "Good Afternoon"
        const randomIndex = Math.floor(Math.random() * gaResponses.length);
        const selectedResponse = gaResponses[randomIndex];

        return message.reply(selectedResponse);
      } else if (geRegex.test(event.body.toLowerCase())) {
        // Define an array of responses for "Good Evening"
        const geResponses = [
          "Good evening!",
          "Evening!",
          "Hello, starlight!",
          "Bonsoir!",
          "Greetings!",
          "Good day!",
          "Hi, night owl!",
          "Hello!",
          "A lovely evening to you!",
          "Hi, moonbeam!",
          "Hello there!",
          "Hope you're having a great evening!",
          "Evening bliss!",
        ];

        // Choose a random response for "Good Evening"
        const randomIndex = Math.floor(Math.random() * geResponses.length);
        const selectedResponse = geResponses[randomIndex];

        return message.reply(selectedResponse);
      } else if (gnRegex.test(event.body.toLowerCase())) {
        // Define an array of responses for "Good Night"
        const gnResponses = [
          "Good night 🌛 and pleasant dreams 💤😴🛌. May all your worries 🤯 and troubles 🥴 disappear 👋🏻👋🏻 as you drift off to sleep 😴.",
          "May your sleep be as soft and warm as a cloud ☁, and may your dreams be as sweet as candy 🍬. Good night 🌛 and sweet dreams 💤!",
          "As the day comes to a close 🌑, let go of all your worries 🤯 and troubles 🥴. Close your eyes 😴 and relax, knowing that tomorrow is a new day full of possibilities ✨✨. Good night 🌛 and sleep tight 🛌!",
          "May the night bring you peace 🕊 and rest 🛌, and may the morning bring you joy 😊 and happiness 😃. Good night 🌛 and sweet dreams 💤!",
          "Close your eyes 😴 and take a deep breath 💨. As you exhale, let go of all your stress 🤯 and worries 🥴. Let the night wash over you like a warm blanket 🛏, and drift off to sleep knowing that everything is going to be okay 👌🏻. Good night 🌛 and sweet dreams 💤!",
          "The night is a time for rest 🛌 and relaxation 😌, a time to let go of the day's stresses 🤯 and worries 🥴. As you drift off to sleep 😴, let the darkness wash over you like a warm blanket 🛏, and let your mind wander to all the things you are grateful for 🙏🏻. Good night 🌛 and sweet dreams 💤!",
          "May the night bring you all the things you need to wake up refreshed 😴 and ready to take on the day 🌞. May your dreams be filled with peace 🕊, love 💕, and laughter 😂. Good night 🌛 and sweet dreams 💤!",
          "Good night 🌛 to the stars ⭐ that twinkle in the sky, and to the moon 🌑 that shines so bright. May your dreams be filled with wonder ✨ and magic 🧙‍♂.",
          "May your sleep be as peaceful as a forest 🌳 at night, and may your dreams be as sweet as the stars ⭐ in the sky. Good night 🌛 and sweet dreams 💤!",
          "As you close your eyes 😴, let the worries of the day melt away 👋🏻. May your dreams be filled with all the things that make you happy 😊. Good night 🌛 and sweet dreams 💤!",
          "Good night 🌛 to the world, and to all the people in it. May your dreams be filled with love 💕, laughter 😂, and peace 🕊.",
          "May the night bring you rest 🛌 and relaxation 😌, and may the morning bring you joy 😊 and happiness 😃. Good night 🌛 and sweet dreams 💤!",
          "The night 🌛 is a time for rest and relaxation 😌. Let go of all your worries 🤯 and drift off to sleep 😴, knowing that tomorrow is a new day ☀ full of possibilities ✨.",
          "May your sleep 😴 be as restful as a warm blanket on a cold night 🛏, and may you wake up refreshed 😴 and ready to take on the day 🌞. Good night 🌛.",
          "Close your eyes 😴 and let the world melt away 👋🏻. You are safe and loved 💕, just like 🐞 and 🌻.",
          "May your dreams 😴 be filled with all the things that make you happy 😊, like 🍦, 🐶, and 🏖. Good night 🌛.",
          "May your dreams 😴 be filled with hope 🤞🏻 and possibilities ✨, like a rainbow 🌈 after a storm ⛈. Good night 🌛."
        ];

        // Choose a random response for "Good Night"
        const randomIndex = Math.floor(Math.random() * gnResponses.length);
        const selectedResponse = gnResponses[randomIndex];

        return message.reply(selectedResponse);
      }
}
    }
  }
};