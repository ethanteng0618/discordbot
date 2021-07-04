const Discord = require("discord.js")

module.exports = {
    name: 'ban',
    desc: 'makes ban',
    async execute(message, args) {
        //perms
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('you dont have ban perms xdd')
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply('give me admin')

        //variables
        let reason = args.slice(1).join(' ')
        const mentionedMember = message.mentions.members.first()

        //input
        if(!reason) reason = 'idk'
        if(!args[0]) return message.channel.send('bruh?? who to ban??')
        if(!mentionedMember) return message.channel.send('who')
        if(!mentionedMember.bannable) return message.channel.send('cant ban?? what?')

        //execute
        const banEmbed = new Discord.MessageEmbed()
            .setTitle(`BAN`)
            .setDescription(`<@${message.author.id}> banned:\n<@${mentionedMember.id}>`)
            .setColor(0xA90000) //orange
            .setTimestamp()

        await mentionedMember.ban({
            days: 0,
            reason: reason
        }).catch(err => console.log(err)).then(() => message.channel.send(banEmbed))
    }
}
