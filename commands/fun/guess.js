module.exports = {
    name: 'guess',
    description: "guess a number 1-100",
    execute(message, args) {
        var mes = message.content.split(" ");
        message.reply('Picking a random number between 1 and 100');
        num = Math.floor((Math.random() * 100) + 1);
        guesses = 0;
      
      //finds the number 1-100

        if (mes[0] == '.guess') {
            if (num == 0) 
            {
                message.reply('Picking a random number between 1 and 100');
                num = Math.floor((Math.random() * 100) + 1);
                guesses = 0;
            }
            else if (mes[1] == num) 
            {
                guesses++;
                message.reply('You got it! Only took ' + guesses + ' tries.');
                message.reply('Picking a random number between 1 and 100');
                num = Math.floor((Math.random() * 100) + 1);
                guesses = 0;
            }
            else if (mes[1] < num) {
                message.reply(mes[1] + ' is too low shitter');
                guesses++;

            }
            else if (mes[1] > num) {
                message.reply(mes[1] + ' is too high shitter');
                guesses++;
            }
        }
    }
