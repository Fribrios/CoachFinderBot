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

bot.login('MzAyMTkzMzcwOTE3NTAyOTc4.C9Qz1Q.UAYWe-e2oFEbjOO1l0ZT3sx0D_4');