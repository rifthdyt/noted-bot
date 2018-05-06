const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity(`Rainbow Six Siege everytime`);

}
);

bot.on("message", function (message) {
    if (message.content == "hello") {
        message.channel.sendMessage("HI,IM TOXIC");
    }
});


bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '-';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}settings`) {
        message.channel.send("https://i.imgur.com/qvSpHrM.png");
    }

});

bot.login(process.env.token);
