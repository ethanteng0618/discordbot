module.exports = {
    name: 'date',
    desc: 'sends the date',
    execute(message, args){
        const moment = require('moment')
        message.channel.send(moment().format('MMMM Do YYYY, h:mm:ss a'))
    }
}
