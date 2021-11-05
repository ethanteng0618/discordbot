const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'unban',
    desc: 'unbans a user',
    async execute(message, args) {
        //perms
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('you no unban perms :pensive:')
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply('give admin')

        //variables
        let reason = args.slice(1).join(' ')
        let userID = args[0]

        //input
        if(!reason) reason = 'idk'
        if(!args[0]) return message.channel.send('bruh?? who to unban??')
        if(isNaN(args[0])) return message.channel.send('unban with id nerd `example: .unban 512018848325697537 instead of .unban @Exotic`')

        //execute
        message.guild.fetchBans().then(async bans => {
            if(bans.size == 0) return message.channel.send('no one in this server is beaned')

            let bUser = bans.find(b => b.user.id == userID)

            if(!bUser) return message.channel.send('the users id is not banned')

            await message.guild.members.unban(bUser.user, reason).catch(err => {
                console.log(err)
                return message.channel.send('couldnt unban id discord bad xddd')
            }).then(() => {
                const unbanEmbed = new MessageEmbed()
                    .setColor(0x00ff00) //green embed color
                    .setTitle('UNBAN')
                    .setDescription(`<@${message.author.id}> unbanned:\n<@${args[0]}>`)
                    .setTimestamp()
                message.channel.send(unbanEmbed)
            })
        })
    }
}
