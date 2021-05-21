module.exports = {
    name: 'date',
    desc: 'sends the date',
    execute(message, args){
        message.channel.send(Date.now())
    }
}
