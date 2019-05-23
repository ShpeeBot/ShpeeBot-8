const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	var time = Date.now();

	const embed = new Discord.RichEmbed()
		.setColor('GREEN')
		.setTitle('Bot Info')
		.addField('Bot Author', '[LeoDoesThings](https://github.com/NdT3Development) (Leo [LeoDoesThings#9534])', true)
		.addField(`Github Repository`, `https://github.com/LeoDoesThings/ShpeeBot`, true)
		.addField(`Discord.js Version`, `v${Discord.version}`, true)
		.addField(`Node Version`, `${process.version}`, true)
		.addField(`Bot Version`, `${client.version}`)
		.setDescription(`This is an open source bot created by [LeoDoesThings](https://github.com/LeoDoesThings) made for the the DankZone Discord server.\n Type [prefix]help in a text channel for commands`)
		.setFooter(`Time taken: ${Date.now() - time}ms`);
	message.channel.send({ embed });

};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: 'info',
	category: 'System',
	description: 'Provides some bot info',
	usage: 'info'
};
