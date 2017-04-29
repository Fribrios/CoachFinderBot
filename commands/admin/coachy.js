const commando = require('discord.js-commando');

class CoachyCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name : 'coachy',
			group : 'admin',
			memberName : "coachy",
			description : "removes student role and replaces with coach.",
		});
	}

	async run(message, args) {
		console.log("Running the coachy command!");
	}

	hasPermission(message){	// if user is not in the Student role
		message.message.delete().catch(console.error);
		return message.member.roles.exists('name', 'Moderators') || message.member.roles.exists('name', 'Wawa');
	}

}

module.exports = CoachyCommand;