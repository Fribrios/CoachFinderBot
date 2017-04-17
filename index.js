const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry
  .registerGroups(
[	['setup', 'Commands for finding a coach/student'],
	['students', 'Commands for students'],
	['coaches' , 'Commands for coaches']
	])
  .registerDefaults()
  .registerCommandsIn(__dirname + '/commands');

bot.on('guildMemberAdd', member => {
	member.addRole(member.guild.roles.find("name", "Students")).catch(console.error);
});

bot.on('message', message => {
	if ( message.channel.name == 'request-coaching' ){
		if ( !message.content.startsWith('!') && !message.author.bot){
			message.reply('You did not type a command, please only use commands in this text chat. (Deleting messages in 3 seconds...)').catch(console.error);
			setTimeout(function() {
				message.channel.bulkDelete(2);
			}, 3000);
		}
	}
})
bot.login('MzAyMTkzMzcwOTE3NTAyOTc4.C9V8VA.M0OzmtsQlgbrm0NWk_wlHG5O8j8');