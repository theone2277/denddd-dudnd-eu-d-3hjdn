const Big = require('big.js');
const fs = require('fs');

module.exports = {
  config: {
    name: "bankbalreset",
    description: "Reset the bank balance of a user to a specific amount.",
    category: "economy",
    role: 2, // Set the required role or permission level for this command.
  },

  onStart: function ({ args, message }) {
    const uid = args[0];
    const amount = args[1];

    if (!uid || !amount) {
      return message.reply("Please provide a user ID and an amount to reset the bank balance.");
    }

    // Convert the amount to a Big number for precision
    const resetAmount = Big(amount);

    if (resetAmount.lte(0)) {
      return message.reply("The reset amount must be greater than zero.");
    }

    // Check if the reset amount is within the allowed range
    if (resetAmount.gt('1e104')) {
      return message.reply("The reset amount exceeds the maximum allowed amount (1e104).");
    }

    // Load the bank data from the JSON file
    const bankData = JSON.parse(fs.readFileSync("scripts/cmds/bank.json", "utf8"));

    if (bankData[uid]) {
      // Set the user's bank balance to the reset amount
      bankData[uid].bank = resetAmount.toString();

      // Save the updated bank data back to the JSON file
      fs.writeFileSync("scripts/cmds/bank.json", JSON.stringify(bankData));

      return message.reply(`Successfully reset the bank balance of user with UID ${uid} to $${resetAmount.toString()}.`);
    } else {
      return message.reply("User not found in the bank data.");
    }
  },
};