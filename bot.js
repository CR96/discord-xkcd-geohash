const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./auth.json");

client.on("message", async message => {
	if (message.author.bot) return;

	if(message.content.indexOf(config.prefix) !== 0) return;

	const execSync = require('child_process').execSync;
	const output = execSync('./geohash-display.sh', { encoding: 'utf-8' });

	message.channel.send("Today's geohash for Detroit:\n" + output);
});

client.login(config.token);
