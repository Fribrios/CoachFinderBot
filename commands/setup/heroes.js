const commando = require('discord.js-commando');

class HeroesCommand extends commando.Command {
		constructor(client) {
		super(client, {
			name : 'heroes',
			group : 'setup',
			memberName : "heroes",
			description : 'Sets the users roles to include heroes.',
			argsType : 'multiple',
			argsCount : 3
		});
	}

	async run(message, args){
		console.log(message);
	}
}

module.exports = HeroesCommand;