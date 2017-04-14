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
		if (message.message.channel.name != 'help-request'){
			message.reply("This command can only be used in the \"help-request\" channel. Deleting these messages in 5 seconds...");
			setTimeout(function() {
				message.message.channel.bulkDelete(2);
			}, 5000);
			return;
		}
		message.member.sendMessage('Hello ' + message.member.displayName + "!\n"
			+ "If you would like to try and find a coach/student, reply to this message with only \"!heroes [hero1] [hero2] ... [heroN]\" (No caps)\n\n"
			+ "Example: ```!heroes hanzo symmetra torbjorn```");
		message.reply("Okay, sending you the instructions now, Deleting these messages in 5 seconds...");
		setTimeout(function() {
			message.message.channel.bulkDelete(2);
		}, 5000);
	}

	hasPermission(message){	// if user is not in the Student role
		return message.member.roles.exists('name', 'Coach') || message.member.roles.exists('name', 'Student');
	}
}

module.exports = FindCommand;