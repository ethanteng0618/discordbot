module.exports = {
    name: 'date',
    desc: 'sends the date',
    execute(message, args){
        const date = new Date()
        message.channel.send("**" + date.getHours() + ":" + date.getMinutes() + "\n" + date.toDateString() + "**")
    }
}
