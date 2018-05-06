const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity(`Rainbow Six Siege everytime`);

}
);

bot.on("message", function (message) {
    if (message.content == "hello") {
        message.channel.sendMessage("HI,IM TOXIC AND I KNOW IT");
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



bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '-';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}Notedesl`) {
        message.channel.send("https://play.eslgaming.com/player/8745630/");
    }

});

bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '-';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}youtube`) {
        message.channel.send("https://www.youtube.com/channel/UCQ4dS_JStXcK3A30isduBbg");
    }

});

bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '-';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}twitter`) {
        message.channel.send("https://twitter.com/officialnoted?lang=en");
    }

});

bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '-';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}twitch`) {
        message.channel.send("https://www.twitch.tv/officialnoted");
    }

});

bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '-';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}facebook`) {
        message.channel.send("https://www.facebook.com/officialnoted/");
    }

});

bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '-';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}NotedStats`) {
        message.channel.send("https://r6stats.com/stats/uplay/noted.");
    }

});




bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '-';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}commands`) {
        message.channel.send("https://i.imgur.com/ZqKzZdl.png");
    }

});

bot.login(process.env.token);
