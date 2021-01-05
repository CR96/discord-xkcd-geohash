const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./auth.json");

client.on("message", async message => {
	if (message.author.bot) return;

	if(message.content.indexOf(config.prefix) !== 0) return;

	message.channel.send("Hello, world!");
});

client.login(config.token);
