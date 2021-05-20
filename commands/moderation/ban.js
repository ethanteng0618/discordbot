const Discord = require("discord.js")

module.exports = {
    name: 'ban',
    desc: 'makes ban',
    async execute(message, args) {
        //perms
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('no perms stupid')
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply('stupid owner didnt even give me, the bot, the ability to ban')

        //variables
        let reason = args.slice(1).join(' ')
        const mentionedMember = message.mentions.members.first()

        //input
        if(!reason) reason = 'idk'
        if(!args[0]) return message.channel.send('bruh?? who to ban??')
        if(!mentionedMember) return message.channel.send('how did you manage to mention someone thats NOT IN THE SERVER')
        if(!mentionedMember.bannable) return message.channel.send('cant ban?? what?')

        //execute
        const banEmbed = new Discord.MessageEmbed()
            .setTitle(`you got banned by ${message.author.username} smh`)
            .setDescription(`reason for ban: ${reason}`)
            .setColor(0x007FFF)
            .setTimestamp()

        await mentionedMember.send(banEmbed).catch(err => console.log(err))
        await mentionedMember.ban({
            days: 0,
            reason: reason
        }).catch(err => console.log(err)).then(() => message.channel.send(`${message.author} just banned <@${mentionedMember.id}>`))
    }
}