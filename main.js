//docs https://discord.js.org/#/docs/main/stable/general/welcome
//cd documents/github/discordbot
//variables
const Discord = require("discord.js")
const client = new Discord.Client()

//config
const { prefix, token } = require('./config.json')

//find folder lol
const fs = require('fs')

const commandFolders = fs.readdirSync('./commands');

client.commands = new Discord.Collection()


//finds files in folders
for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

//logs bot on in console when the bot turns on
client.once('ready', () => {
    console.log('bot on')
    //sets the bots status
    client.user.setActivity('YOU', { type: 'WATCHING' })
})
 
//handles commands
client.on('message', message =>{
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();	

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
	try {
		command.execute(message, args)
	} catch (error) {
		console.error(error);
		message.reply('command didnt run bc exotic is shit at programming');
    }
})

//bot login token
client.login(token)
