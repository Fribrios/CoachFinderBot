const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry
  .registerGroups([
	['setup', 'Commands for finding a coach/student'],
	['students', 'Commands for students'],
	['coaches' , 'Commands for coaches']
	])
  .registerDefaults()
  .registerCommandsIn(__dirname + '/commands');

bot.login('MzAyMTkzMzcwOTE3NTAyOTc4.C9GdVw.MhyOF8iNkQszdbVDxK1CJ3gT7rA');