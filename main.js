//docs https://discord.js.org/#/docs/main/stable/general/welcome

const Discord = require("discord.js")
const client = new Discord.Client()

const settings = require('./settings.json')
const prefix = settings.prefix

const fs = require('fs')

client.commands = new Discord.Collection()

const commandFolders = fs.readdirSync('./commands');

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
    //this sets the bots status
    client.user.setActivity('russell said to set the status to "pls give me nitro"', { type: 'PLAYING' })
})
 
client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

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
client.login(settings.token)