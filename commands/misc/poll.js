module.exports = {
    name:'poll',
    desc:'make poll',
    async execute(message, args) {
        const Discord = require('discord.js')
        const polls = args.slice(0).join(' ')
        const regex = polls.match(/"[^"]+"|[\\S]+"[^"]+/g)
        
        if(regex.length > 9) {
            return message.reply('ur is noop')
        }

        let str = ''

        let emojis = [
            '1️⃣',
            '2️⃣',
            '3️⃣',
            '4️⃣',
            '5️⃣',
            '6️⃣',
            '7️⃣',
            '8️⃣',
            '9️⃣'
        ]
        let i = 0   
        
        for (const poll of regex) {
            str = str + `${emojis[i]} ${poll}\n\n`
            i++
        }

        const embed = new Discord.MessageEmbed()
            .setDescription(str.replace(/"/g, ' '))
        
        if (regex.length == 1){
            const question = message.channel.send('📊**' + str.replace(/1️⃣|"|\n/g, '') + '**')
            question.then(msg => {
                msg.react('👍')
                msg.react('👎')
            })
        } else {
            const msg = await message.channel.send(embed)
            for (let i = 0; i < regex.length; i++) {
                msg.react(emojis[i])
            }
        }
        message.delete()
    }
}

