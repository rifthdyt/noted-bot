const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'Subscribe abbyyyyyxo!',
            type: "STREAMING",
            url: "https://m.twitch.tv/abbyyyyyxo/"
        }
    });
});




bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
    if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | name : ', `${member}`)
        .addField(':microphone2: | You joined ABBYS server!', `WELCOME ON ABBYS SERVER, ${member}`)
        .addField(':id: | User :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | You are now a member!', `${member.guild.memberCount}`)
        .addField("Name", `<@` + `${member.id}` + `>`, true)
        .addField('Server', `${member.guild.name}`, true)
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()

    channel.sendEmbed(embed);
});
bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});


bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
    if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Name:', `${member}`)
        .addField('Has Been Banned by Battleye™', ';(')
        .addField('BYE BYE :(. :(', 'Shitty Mexican Dude')
        .addField('Members', `${member.guild.memberCount}` + " Members")
        .setFooter(`**${member.guild.name}`)
        .setTimestamp()

    channel.sendEmbed(embed);
});

bot.on("message", function (message) {
    if (message.content == "@abby.#4806") {
        message.channel.sendMessage("KILL THIS CHINA DUDE!");
    }
});

bot.on("message", function (message) {
    if (message.content == "hello") {
        message.channel.sendMessage("China!");
    }
});



bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '?';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}version`) {
        message.channel.send("version 0.5");
    }

});

bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '?';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}restart`) {
        message.channel.send(":gear: **Restart the Bot**");
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

    let prefix = '?';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}twitch`) {
        message.channel.send("https://m.twitch.tv/abbyyyyyxo");
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

bot.login(process.env.token);
