const Discord = require('discord.js')

module.exports = {
    name: 'kick',
    desc: 'makes kick',
    async execute(message, args) {
        if(message.member.hasPermission('KICK_MEMBERS')){
            //perms
            if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('no perms stupid')
            if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.reply('stupid owner didnt even give me, the bot, the ability to kick')

            //variables
            let reason = args.slice(1).join(' ')
            const mentionedMember = message.mentions.members.first()

            //input
            if(!reason) reason = 'none'
            if(!args[0]) return message.channel.send('bruh?? who to kick??')
            if(!mentionedMember) return message.channel.send('not in server 😔😔😔')
            if(!mentionedMember.kickable) return message.channel.send('cant kick?? what?')
            if(mentionedMember == message.author.username) return message.channel.send('cant kick yourself idiot')

            //execute
            const kickEmbed = new Discord.MessageEmbed()
                .setTitle(`KICK`)
                .setDescription(`<@${message.author.id}> kicked <@${mentionedMember.id}>\n\nReason: ` + reason)
                .setColor(0xFFA500) //orange
                .setTimestamp()

            await mentionedMember.send(kickEmbed).catch(err => console.log(err))
            await mentionedMember.kick({
                days: 0,
                reason: reason
            }).catch(err => console.log(err)).then(() => message.channel.send(kickEmbed))
        }
   
    }
}
