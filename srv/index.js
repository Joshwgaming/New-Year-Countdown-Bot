const { Client, Collection, Intents, MessageEmbed } = require('discord.js');
const { botToken } = require('./config.json');
const client = new Client({
    partials: [
        "CHANNEL", "MESSAGE",
    ],
    intents: [
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});

client.slashCommands = new Collection();
client.commands = new Collection();

['slash-command-handler', 'command-handler', 'event-handler',].forEach(handler => {
    require(`./handlers/${handler}`)(client, Client, MessageEmbed);
})

client.login(botToken);
