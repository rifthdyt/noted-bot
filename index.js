const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Build a Wall!`);
});




bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'noobs');
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
    let channel = member.guild.channels.find('name', 'noobs');
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
    if (message.content == "mexico") {
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

    let prefix = '?';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}invisible`) {
        message.channel.send("_ _");
    }

});

bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '?';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}despacito`) {
        message.channel.send("https://www.youtube.com/watch?v=kJQP7kiw5Fk");
    }

});

bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '?';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}owner`) {
        message.channel.send("RIFT aka. the invisible dude");
    }

});

bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '?';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}vote`) {
        message.channel.send("http://www.strawpoll.me/16428605");
    }

});

bot.login(process.env.token);
