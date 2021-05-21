module.exports = {
	name: 'avatar',
	aliases: ['icon', 'pfp'],
	execute(message) {
		const user = message.mentions.users.first()
		if (!message.mentions.users.size) {
			message.channel.send('<@' + message.author.id + '>\'s avatar: ' + message.author.displayAvatarURL());
			message.channel.send('lol noob')
		} else {
			message.channel.send(`<@${user.id}>'s avatar: ${user.displayAvatarURL()}`)
		}

	}
};
