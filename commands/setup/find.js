const commando = require('discord.js-commando');

class FindCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name : 'find',
			group : 'setup',
			memberName : "find",
			description : 'Pings bot to begin the finding procedure'
		});
	}

	async run(message, args) {
		// console.log("user: " + message.member.displayName);
		message.member.sendMessage('Hello ' + message.member.displayName + "!\n"
			+ "If you would like to try and find a coach/student, reply to this message with only \"!heroes [hero1] [hero2] ... [heroN]\" (No caps)\n\n"
			+ "Example: ```!heroes hanzo symmetra torbjorn```");
		// message.reply("Okay, finding a coach for you...");
	}

	hasPermission(message){	// if user is not in the Student role
		return message.member.roles.exists('name', 'Coach') || message.member.roles.exists('name', 'Student');
	}
}

module.exports = FindCommand;