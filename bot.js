const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./auth.json");

client.on("message", async message => {
	if (message.author.bot) return;

	if(message.content.indexOf(config.prefix) !== 0) return;
	
	const args = message.content.slice(prefix.length).trim().split(' ');
	const execSync = require('child_process').execSync;
	const command = './geohash-display.sh' + ' ' + args	
	const output = execSync(command, { encoding: 'utf-8' });

	message.channel.send("Today's geohash for " + args + ": " + output);
});

client.login(config.token);
