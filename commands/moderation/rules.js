const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'rules',
    desc: 'makes rules',
    execute(message) {
        if (message.member.permissions.has('ADMINISTRATOR')){
            const embed = new MessageEmbed()
            .setTitle('Rules')
            .setColor(0x007FFF)
            .addFields(
                {name:'Rule 1', value: 'Don\'t spam. If you do you get a warning and then 10 hour mute if u continue'},
                {name:'Rule 2', value: 'Use common sense don\'t be annoying'},
                {name:'Rule 3', value: 'Keep all things in their dedicated channels'},
                {name:'Rule 4', value: 'memes out of general 😠'},
                {name:'Rule 5', value: 'use the vc\'s for their dedicated purposes'},
                {name:'Rule 6', value: 'To see the commands of bots, go to the pinned messages'},
                {name:'Rule 7', value: 'No breaking discord tos'},
            )
            .setFooter('no crash gif')
            message.channel.send(embed)
            setTimeout(() => message.delete(), 1 )
        } else {
            message.channel.send('gotta be admin to do thsi siht lmaaoo')
        }
        
    }
}