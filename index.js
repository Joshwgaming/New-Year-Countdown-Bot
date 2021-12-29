const { Client, Intents, MessageEmbed } = require('discord.js');
const { botToken, prefix } = require('./config.json');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});

client.login(botToken)

client.on('ready', () => {
    console.log(`${client.user.tag} successfully logged in.`);

    var interval = setInterval (function () {
        client.user.setActivity(`${prefix}countdown`)
    }, 1 * 60000);//1800000);//1000 = 1s

});

client.on('messageCreate', (message) => {
    const newYearDate = `December 31 ${new Date().getFullYear()} 23:59:59`;

    function getTimeRemaining(endtime){
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor( (total / 1000) % 60 );
        const minutes = Math.floor( (total / 1000 / 60) % 60 );
        const hours = Math.floor( (total / (1000 * 60 * 60)) % 24 );
        const days = Math.floor( total / (1000 * 60 * 60 * 24) );
      
        return {
          total,
          days,
          hours,
          minutes,
          seconds
        };
      }
    
    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).split(' ');
        let command = args[0];
        if (command === "countdown") {
            const { days, hours, minutes, seconds } = getTimeRemaining(newYearDate);
            const countdownEmbed = new MessageEmbed()
                .setTitle('🎉 New Year Countdown 🎉')
                .setDescription(`It is: ${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds until ${new Date().getFullYear() + 1} begins!`)
                .setTimestamp()
                .setColor('ff6666')
            message.channel.send({ embeds: [countdownEmbed] })
        }
    }
})