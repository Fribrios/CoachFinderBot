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
		if (message.message.channel.name != 'help-request'){
			message.reply("This command can only be used in the \"help-request\" channel. Deleting these messages in 5 seconds...").catch(console.error);
			setTimeout(function() {
				message.message.channel.bulkDelete(2);
			}, 5000);
			return;
		} else {
			message.member.guild.roles.forEach(function(r){
				if (r.name.startsWith('~')){
					args.forEach(function(e){
						if (('~' + e) == r.name.toLowerCase()){
							message.member.addRole(r);
						}
					});
				}
			});
			message.message.delete();
		}
	}
}	

module.exports = HeroesCommand;