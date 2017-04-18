const commando = require('discord.js-commando');

class RemoveCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'remove',
			group: 'setup',
			membername: 'remove',
			guildonly : true
		});
	}

	async run (message, args) {

		if (message.message.channel.name != 'request-coaching'){
			message.reply("This command can only be used in the \"request-coaching\" channel. Deleting these messages in 5 seconds...").catch(console.error);
			setTimeout(function() {
				message.message.channel.bulkDelete(2).catch(console.error);
			}, 5000);
			return;
		} else {
		}
	}

}

module.exports = RemoveCommand;