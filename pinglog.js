const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
client.on("ready", () => {
    console.log("Ping Logger Online");
    console.log("Login Token:" + config.token)
});
client.on("message", (message) => {
    if (message.author == client.user) return;
    if (message.isMemberMentioned(client.user)) {
        if (message.attachments.size > 0) {
            var Attachment = (message.attachments).array();
            client.channels.get(config.logChannel).send("> **" + message.author.tag + "**: '" + message.content + "' __with attachment__ " + Attachment[0].url + " in channel **#" + message.channel.name + "** from server **" + message.guild +"**");
        } else {
            client.channels.get(config.logChannel).send("> **" + message.author.tag + "**: '" + message.content + "' in channel **#" + message.channel.name + "** from server **" + message.guild +"**");
        }
    }
});
client.login(config.token);