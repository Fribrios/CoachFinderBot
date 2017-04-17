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
		// console.log(message.guild.channels.find("id", "301920267347689483").name);s
		if (message.message.channel.id != '301920267347689483'){
			message.reply("This command can only be used in the \"request-coaching\" channel. Deleting these messages in 5 seconds...").catch(console.error);
			setTimeout(function() {
				message.message.channel.bulkDelete(2);
			}, 5000);
			return;
		} else {
			message.member.guild.roles.forEach(function(r){
				if (r.name.startsWith('~')){
					args.forEach(function(e){
						if (('~' + e.toLowerCase()) == r.name.toLowerCase()){
							message.member.addRole(r).catch(console.error);
						}
					});
				}
			});
			message.message.delete();
		}
	}
}	

module.exports = HeroesCommand;