module.exports = {
    name: 'roll',
    description: 'gives random number between 0-100',
    execute(message, args) {
        message.channel.send(Math.floor(Math.random() * 100))
    }
}