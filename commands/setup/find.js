const commando = require('discord.js-commando');

class FindCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name : 'find',
			group : 'setup',
			memberName : "find",
			description : 'Pings bot to begin the finding procedure',
			guildOnly : true
		});
	}

	async run(message, args) {

		if (message.message.channel.name != 'request-coaching'){
			message.reply("This command can only be used in the \"request-coaching\" channel. Deleting these messages in 5 seconds...").catch(console.error);
			setTimeout(function() {
				message.message.channel.bulkDelete(2);
			}, 5000);
			return;
		} else {
			// message.member.sendMessage("Here are the list of coaches teaching your heroes:").catch(console.error);
			let listOfUsers = (message.member.roles.exists('name', 'Students') ? message.guild.roles.find("name", "Coaches").members : message.guild.roles.find("name", "Students").members);
			listOfUsers.forEach(function (c){ //Iterates through the list of all the users with the opposite Role (All coaches if used by a student)
				let heroList = []; // Array that holds the list of matching heroes
				c.roles.forEach(function(h){  //Loops trough each coaches' individual role
					if (h.name.startsWith('~')){ //Removes ~ delimiter
						message.member.roles.forEach(function(r){ //Loops through user's roles
							if (r.name.startsWith('~')){ // Removes ~ delimiter
								if (r.name == h.name){ //Finds match and adds to array
									heroList.push(r.name.slice(1));
								}
							}
						});
					}
				});
				if (heroList.length != 0){
					if ( message.member.roles.exists('name', 'Students') ){
						message.member.sendMessage(c.user + " can teach you: " + heroList).catch(console.error);
						c.sendMessage("Hello, " + c.displayName + "! It looks like " + message.member.user +
							" is currently looking for coaching with: " + heroList + "!\n Why don't you shoot them a message?").catch(console.error);
						// console.log(c.user + " can teach you: " + heroList);
						// console.log("Hello, " + c.displayName + "! It looks like " + message.member.user +
						// 	" is currently looking for coaching with: " + heroList + "!\n Why don't you shoot them a message?");
					} else {
						message.member.sendMessage(c.user + " is looking to be taught: " + heroList).catch(console.error);
						c.sendMessage("Hello, " + c.displayName + "! It looks like " + message.member.user +
							" is currently looking for students to teach the following heroes: " + heroList + "!\n Why don't you shoot them a message?").catch(console.error);
						// console.log(c.user + " is looking to be taught: " + heroList);
						// console.log("Hello, " + c.displayName + "! It looks like " + message.member.user +
						// 	" is currently looking for students to teach the following heroes: " + heroList + "!\n Why don't you shoot them a message?");
					}
				}
			});
		}
		message.message.delete();
	}

	hasPermission(message){	// if user is not in the Student role
		message.message.delete();
		return message.member.roles.exists('name', 'Coaches') || message.member.roles.exists('name', 'Students');
	}
}

module.exports = FindCommand;