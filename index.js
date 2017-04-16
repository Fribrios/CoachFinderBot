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

bot.login('MzAyMTkzMzcwOTE3NTAyOTc4.C9V8VA.M0OzmtsQlgbrm0NWk_wlHG5O8j8');