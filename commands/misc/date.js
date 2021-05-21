module.exports = {
    name: 'date',
    desc: 'sends the date',
    execute(message, args){
        const date = new Date()
        message.channel.send("time: **" + date.getHours() + ":" + date.getMinutes() + "** on **" + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() + "**")
    }
}
