module.exports = {
  config: {
    name: "donate",
    version: "1.9",
    author: "Shikaki",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "💸 Transfer money to another user"
    },
    longDescription: {
      en: "💸 Transfer a specified amount of money to another user"
    },
    category: "💰 Economy",
    guide: {
      en: "💸 {pn} <recipientID> <amount>"
    }
  },

  parseShorthandNumber: function (input) {
    const shorthandNumber = input.toUpperCase().trim();
    const multiplier = {
      'K': 1e3,
      'M': 1e6,
      'B': 1e9,
      'T': 1e12,
      'QD': 1e15,
      'QN': 1e18,
      'SX': 1e21,
      'SP': 1e24,
      'OT': 1e27,
      'NN': 1e30,
      'DC': 1e33,
      'UD': 1e36,
      'DU': 1e39,
      'TRE': 1e42,
      'QTD': 1e45,
      'QND': 1e48,
      'SXD': 1e51,
      'SPD': 1e54,
      'OTD': 1e57,
      'NND': 1e60,
      'VGD': 1e63,
      'UNVG': 1e66,
      'DUOVG': 1e69,
      'TREVG': 1e72,
      'QUAVG': 1e75,
      'QUIVG': 1e78,
      'SESVG': 1e81,
      'SEPVG': 1e84,
      'OCTVG': 1e87,
      'NOVVG': 1e90,
      'TRIG': 1e93,
      'UNTRIG': 1e96,
      'DUOTRIG': 1e99,
      'GOOGOL': 1e100
    };

    // Check if the input is a valid shorthand notation
    if (shorthandNumber in multiplier) {
      return multiplier[shorthandNumber];
    } else {
      // Try to parse it as a number
      const parsedNumber = parseFloat(input);
      if (isNaN(parsedNumber) || parsedNumber <= 0) {
        // Not a valid positive number
        return null;
      }
      return parsedNumber;
    }
  },

  formatBalance: function (balance) {
    const fullForms = {
      1e3: 'K',
      1e6: 'M',
      1e9: 'B',
      1e12: 'T',
      1e15: 'QD',
      1e18: 'QN',
      1e21: 'SX',
      1e24: 'SP',
      1e27: 'OT',
      1e30: 'NN',
      1e33: 'DC',
      1e36: 'UD',
      1e39: 'DU',
      1e42: 'TRE',
      1e45: 'QTD',
      1e48: 'QND',
      1e51: 'SXD',
      1e54: 'SPD',
      1e57: 'OTD',
      1e60: 'NND',
      1e63: 'VGD',
      1e66: 'UNVG',
      1e69: 'DUOVG',
      1e72: 'TREVG',
      1e75: 'QUAVG',
      1e78: 'QUIVG',
      1e81: 'SESVG',
      1e84: 'SEPVG',
      1e87: 'OCTVG',
      1e90: 'NOVVG',
      1e93: 'TRIG',
      1e96: 'UNTRIG',
      1e99: 'DUOTRIG',
      1e100: 'GOOGOL'
    };

    for (const value in fullForms) {
      const fullForm = fullForms[value];
      if (balance >= value) {
        const formattedBalance = balance / value;
        const formatted = formattedBalance.toFixed(2);
        if (formatted.endsWith('.00')) {
          return `${formatted.slice(0, -3)} ${fullForm}`;
        } else if (formatted.endsWith('0')) {
          return `${formatted.slice(0, -1)} ${fullForm}`;
        } else {
          return `${formatted} ${fullForm}`;
        }
      }
    }

    const formatted = balance.toFixed(2);
    if (formatted.endsWith('.00')) {
      return formatted.slice(0, -3);
    } else if (formatted.endsWith('0')) {
      return formatted.slice(0, -1);
    } else {
      return formatted;
    }
  },

  onStart: async function ({ api, event, usersData, args, message }) {
    const { threadID, senderID } = event;

    if (args.length < 2) {
      return message.reply("❌ Please provide a valid recipient ID and the amount to transfer.", threadID);
    }

    const recipientID = args[0];
    const amountInput = args[1];
    const amount = this.parseShorthandNumber(amountInput);

    if (!amount) {
      return message.reply("❌ Please enter a valid positive amount to transfer.", threadID);
    }

    const senderData = await usersData.get(senderID);

    if (amount > senderData.money) {
      return message.reply("❌ You don't have enough money to make this transfer.", threadID);
    }

    const recipientData = await usersData.get(recipientID);

    const senderName = (await api.getUserInfo(senderID))[senderID].name;
    const recipientName = (await api.getUserInfo(recipientID))[recipientID].name;

    const senderBalanceBefore = senderData.money;
    const recipientBalanceBefore = recipientData.money;

    await usersData.set(senderID, {
      money: senderBalanceBefore - amount,
    });

    await usersData.set(recipientID, {
      money: recipientBalanceBefore + amount,
    });

    const senderBalanceAfter = senderBalanceBefore - amount;
    const recipientBalanceAfter = recipientBalanceBefore + amount;

    const msg = `
💸 Money Transfer Complete 💸

From: ${senderName}

To: ${recipientName}

Amount: $ ${amount.toFixed(2)}

-----------------------

✅ You have successfully transferred $ ${amount.toFixed(2)} to ${recipientName}.

-----------------------

${senderName}'s Balance Before: $ ${senderBalanceBefore.toFixed(2)}
${senderName}'s Balance After: $ ${this.formatBalance(senderBalanceAfter)}

-----------------------

${recipientName}'s Balance Before: $ ${recipientBalanceBefore.toFixed(2)}
${recipientName}'s Balance After: $ ${this.formatBalance(recipientBalanceAfter)}

-----------------------
`;

    message.reply(msg, threadID);
  }
};
