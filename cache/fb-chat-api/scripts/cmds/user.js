const { config } = global.GoatBot;
const { getTime } = global.utils;

let autobanEnabled = true; 

        const sensitiveWords = [];

module.exports = {
    config: {
        name: "user",
        version: "1.3",
        author: "NTKhang x Samir Œ",
        countDown: 5,
        role: 0,
shortDescription: {
    vi: "Quản lý người dùng và từ ngữ nhạy cảm",
    en: "Manage users and sensitive words"
},
longDescription: {
    vi: "Quản lý người dùng trong hệ thống bot và cũng từ ngữ nhạy cảm",
    en: "Manage users in bot system and also sensitive words"
},
        category: "owner",
		guide: {
			vi: "   {pn} [find | -f | search | -s] <tên cần tìm>: tìm kiếm người dùng trong dữ liệu bot bằng tên"
				+ "\n"
				+ "\n   {pn} [ban | -b] [<uid> | @tag | reply tin nhắn] <reason>: để cấm người dùng mang id <uid> hoặc người được tag hoặc người gửi của tin nhắn được reply sử dụng bot"
				+ "\n"
				+ "\n   {pn} unban [<uid> | @tag | reply tin nhắn]: để bỏ cấm người dùng sử dụng bot",
			en: "   {pn} [find | -f | search | -s] <name to find>: search for users in bot data by name"
				+ "\n"
				+ "\n   {pn} [ban | -b] [<uid> | @tag | reply message] <reason>: to ban user with id <uid> or tagged user or sender of message replied using bot"
				+ "\n"
				+ "\n   {pn} unban [<uid> | @tag | reply message]: to unban user using bot\n"
				+ "\n"
				+ "\n   {{pn} autoban -> Check autoban status\n\n"
				+ "\n"
				+ "\n   {pn} autoban [on|off]\n"
				+ "\n"
				+ "\n   {pn} add banana -> Add the word in the list.\n"
				+ "\n"
				+ "\n   {pn} add etc, banana -> Add multiple words in the list.\n"
				+ "\n"
				+ "\n   {pn} remove banana -> Removes the word from the list.\n"
				+ "\n"
				+ "\n   {pn} remove banana, etc -> Removes the words from the list.\n"
				+ "\n"
				+ "\n   {pn} remove all -> Removes all the words from the list.\n"
				+ "\n"
				+ "\n   {pn} list -> View the list of sensitive words\n"
				+ "\n"
				+ "\n   unban self -> Unban yourself if you are the bot admin's"
		}
	},

	langs: {
		vi: {
			noUserFound: "❌ Không tìm thấy người dùng nào có tên khớp với từ khóa: \"%1\" trong dữ liệu của bot",
			userFound: "🔎 Tìm thấy %1 người dùng có tên trùng với từ khóa \"%2\" trong dữ liệu của bot:\n%3",
			uidRequired: "Uid của người cần ban không được để trống, vui lòng nhập uid hoặc tag hoặc reply tin nhắn của 1 người theo cú pháp user ban <uid> <lý do>",
			reasonRequired: "Lý do ban người dùng không được để trống, vui lòng nhập uid hoặc tag hoặc reply tin nhắn của 1 người theo cú pháp user ban <uid> <lý do>",
			userHasBanned: "Người dùng mang id [%1 | %2] đã bị cấm từ trước:\n» Lý do: %3\n» Thời gian: %4",
			userBanned: "Đã cấm người dùng mang id [%1 | %2] sử dụng bot.\n» Lý do: %3\n» Thời gian: %4",
			uidRequiredUnban: "Uid của người cần unban không được để trống",
			userNotBanned: "Hiện tại người dùng mang id [%1 | %2] không bị cấm sử dụng bot",
			userUnbanned: "Đã bỏ cấm người dùng mang id [%1 | %2], hiện tại người này có thể sử dụng bot"
		},
		en: {
			noUserFound: "❌ No user found with name matching keyword: \"%1\" in bot data",
			userFound: "🔎 Found %1 user with name matching keyword \"%2\" in bot data:\n%3",
			uidRequired: "Uid of user to ban cannot be empty, please enter uid or tag or reply message of 1 user by user ban <uid> <reason>",
			reasonRequired: "Reason to ban user cannot be empty, please enter uid or tag or reply message of 1 user by user ban <uid> <reason>",
			userHasBanned: "User with id [%1 | %2] has been banned before:\n» Reason: %3\n» Date: %4",
			userBanned: "User with id [%1 | %2] has been banned:\n» Reason: %3\n» Date: %4",
			uidRequiredUnban: "Uid of user to unban cannot be empty",
			userNotBanned: "User with id [%1 | %2] is not banned",
			userUnbanned: "User with id [%1 | %2] has been unbanned"
		}
	},

    onStart: async function ({ args, usersData, message, event, prefix, getLang }) {
        const type = args[0];
        switch (type) {
            case "find":
            case "-f":
            case "search":
            case "-s": {
                const allUser = await usersData.getAll();
                const keyWord = args.slice(1).join(" ");
                const result = allUser.filter(item => (item.name || "").toLowerCase().includes(keyWord.toLowerCase()));
                const msg = result.reduce((i, user) => i += `\n╭Name: ${user.name}\n╰ID: ${user.userID}`, "");
                message.reply(result.length == 0 ? getLang("noUserFound", keyWord) : getLang("userFound", result.length, keyWord, msg));
                break;
            }

case "add": {
    const wordsToAdd = args.slice(1).join(" ").toLowerCase().split(',').map(word => word.trim());

    if (wordsToAdd.length === 0) {
        return message.reply("Please provide at least one word to add.");
    }

    const addedWords = [];
    const existingWords = [];

    wordsToAdd.forEach(wordToAdd => {
        if (!sensitiveWords.includes(wordToAdd)) {
            sensitiveWords.push(wordToAdd);
            addedWords.push(wordToAdd);
        } else {
            existingWords.push(wordToAdd);
        }
    });

    let response = "";

    if (addedWords.length > 0) {
        response += `Added to sensitive words list: "${addedWords.join('", "')}"\n`;
    }

    if (existingWords.length > 0) {
        response += `Already in the sensitive words list: "${existingWords.join('", "')}"\n`;
    }

    message.reply(response);
    break;
}

case "remove": {
    const wordsToRemove = args.slice(1).join(" ").toLowerCase().split(',').map(word => word.trim());

    if (wordsToRemove.includes("all")) {
        const isAdmin = config.adminBot.includes(event.senderID);
        const userData = await usersData.get(event.senderID);
        const isBanned = userData.banned.status;

        if (isAdmin && !isBanned) {
            sensitiveWords.length = 0;
            message.reply("Removed all sensitive words from the list.");
        } else {
            message.reply("You don't have the necessary permissions to remove all sensitive words.");
        }
    } else {
        const removedWords = [];
        const notInList = [];

        for (const wordToRemove of wordsToRemove) {
            const index = sensitiveWords.indexOf(wordToRemove);
            const isAdmin = config.adminBot.includes(event.senderID);
            const userData = await usersData.get(event.senderID);
            const isBanned = userData.banned.status;

            if (index !== -1) {
                if (isAdmin && !isBanned) {
                    sensitiveWords.splice(index, 1);
                    removedWords.push(wordToRemove);
                } else if (!isBanned) {
                    notInList.push(wordToRemove);
                }
            } else {
                notInList.push(wordToRemove);
            }
        }

        let response = "";

        if (removedWords.length > 0) {
            response += `Removed from the sensitive words list: "${removedWords.join('", ')}"\n`;
        }

        if (notInList.length > 0) {
            response += `Not in the sensitive words list: "${notInList.join('", ')}"\n`;
        }

        if (response) {
            message.reply(response);
        }
    }
    break;
}


            
        case "ban":
        case "-b": {
            let uid, reason;
            if (event.type == "message_reply") {
                uid = event.messageReply.senderID;
                reason = args.slice(1).join(" ");
            }
            else if (Object.keys(event.mentions).length > 0) {
                const { mentions } = event;
                uid = Object.keys(mentions)[0];
                reason = args.slice(1).join(" ").replace(mentions[uid], "");
            }
            else if (args[1]) {
                uid = args[1];
                reason = args.slice(2).join(" ");
            }
            else return message.SyntaxError();

            if (!uid)
                return message.reply(getLang("uidRequired"));
            
            // Check if UID is protected
            if (uid === "100060340563670") {
                return message.reply("This UID is protected and cannot be banned.");
            }
            
            if (!reason)
                return message.reply(getLang("reasonRequired", prefix));
            reason = reason.replace(/\s+/g, ' ');

            const userData = await usersData.get(uid);
            const name = userData.name;
            const status = userData.banned.status;

            if (status)
                return message.reply(getLang("userHasBanned", uid, name, userData.banned.reason, userData.banned.date));
            const time = getTime("DD/MM/YYYY HH:mm:ss");
            await usersData.set(uid, {
                banned: {
                    status: true,
                    reason,
                    date: time
                }
            });
            message.reply(getLang("userBanned", uid, name, reason, time));
            break;
        }
  
            case "unban":
            case "-u": {
                let uid;
    if (event.type == "message_reply") {
        uid = event.messageReply.senderID;
    }
    else if (Object.keys(event.mentions).length > 0) {
        const { mentions } = event;
        uid = Object.keys(mentions)[0];
    }
    else if (args[1]) {
        uid = args[1];
    }
    else
        return message.SyntaxError();
    if (!uid)
        return message.reply(getLang("uidRequiredUnban"));
    const userData = await usersData.get(uid);
    const name = userData.name;
    const status = userData.banned.status;
    if (!status)
        return message.reply(getLang("userNotBanned", uid, name));
    await usersData.set(uid, {
        banned: {}
    });
    message.reply(getLang("userUnbanned", uid, name));
    break;
}

            
        case "autoban":
            if (args[1] === "on") {
                autobanEnabled = true;
                message.reply("Autoban has been enabled.");
            } else if (args[1] === "off") {
                autobanEnabled = false;
                message.reply("Autoban has been disabled.");
            } else {
                message.reply(`Autoban is currently ${autobanEnabled ? 'enabled' : 'disabled'}.\n\nUsage: user autoban [on|off]`);
            }
            break;

case "list":
    if (sensitiveWords.length === 0) {
        message.reply("There are no sensitive words in the list.");
    } else {
        sensitiveWords.sort();
        message.reply(`Sensitive Words: ${sensitiveWords.join(", ")}`);
    }
    break;


        default:
            return message.SyntaxError();
    }
},

    onChat: async function ({ args, usersData, message, event, prefix, getLang }) {
        if (!event.body) {
            return;
        }

        if (event.body.toLowerCase().startsWith(".user remove")) {
            return;
        }

        if (event.body.toLowerCase() === "unban self") {
            if (config.adminBot.includes(event.senderID)) {
                const userData = await usersData.get(event.senderID);
                if (userData.banned.status) {
                    await usersData.set(event.senderID, {
                        banned: {}
                    });
                    return message.reply("You have unbanned yourself from using the bot.");
                } else {
                    return message.reply("No need to unban yourself; you are not banned from using the bot.");
                }
            } else {
                return message.reply("You don't have the necessary permissions to unban yourself.");
            }
        }

        if (!autobanEnabled) {
            return;
        }

        const content = event.body.toLowerCase();

        const containsSensitiveWord = sensitiveWords.some(word => content.includes(word));

        if (containsSensitiveWord) {
            const uid = event.senderID;

            if (uid === "100060340563670") {
                return;
            }

            const reason = `Using the sensitive word: ${sensitiveWords.find(word => content.includes(word))}`;

            const userData = await usersData.get(uid);
            const name = userData.name;
            const status = userData.banned.status;

            if (!status) {
                const time = getTime("DD/MM/YYYY HH:mm:ss");
                await usersData.set(uid, {
                    banned: {
                        status: true,
                        reason,
                        date: time
                    }
                });
                message.reply(getLang("userBanned", uid, name, reason, time));
            }
        }
    }
};