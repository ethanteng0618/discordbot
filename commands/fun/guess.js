const discordjs = require('discord.js')

module.exports = {
    name: 'guess',
    description: "guess a number 1-100",
    execute(message, args) {
            filter = m => m.author.id === message.author.id

            var guesses = 5
            const num = Math.floor(Math.random() * 100) + 1

            console.log(num)

            const collector = new discordjs.MessageCollector(message.channel, filter, {
                time: 120000
            })

            message.reply('guess a number between 1-100')
            collector.on('collect', m => {
                const guess = parseInt(m.content)
                if (guesses > 0) {
                    if (guess === num) {
                        m.reply('damn bro you got it')
                        collector.stop()
                    } 
                    else if (guess > num) m.reply('too high 😡😡😡😡😡(' + guesses-- + ' guesses left)')
                    else if (guess < num) m.reply('too low 😴😫😫😫😫(' + guesses-- + ' guesses left)')
                    else {
                        m.reply('a number between 1-100🙄')
                        collector.stop()
                    }
                } else {
                    m.reply('number was ' + num + ' and you guess like shit')
                    collector.stop()
                }
            })

            collector.on('end', collected =>{
                console.log(`${collected.size}`)
            })
        }
    }
