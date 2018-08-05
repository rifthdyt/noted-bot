const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity(`FLICKING NOOBS`);

}
);

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
    if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | name : ', `${member}`)
        .addField(':microphone2: | You joined our server!', `WELCOME TO THE FLICK CLUB MA BOII, ${member}`)
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
        .addField('Has left the server', ';(')
        .addField('BYE BYE :(. :(', 'WHY DO U LEAVE THE FLICK GOD ALONE :(')
        .addField('Members', `${member.guild.memberCount}` + " Members")
        .setFooter(`**${member.guild.name}`)
        .setTimestamp()

    channel.sendEmbed(embed);
});

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
    var emebed = new Discord.RichEmbed()
    .addField("Noteds Settings")
    .addField("Res>> 1920x1080")
    .addField("Aspect Ratio>> 16:9")
    .addField("Sensitivity>> 20/20")
    .addField("ADS>> 100")
    .addField("FOV>> 90")
    .addField("default multiplier.")
    .addField("default windows 6/11.")
    .addField("Noteds PC Specs")
    .addField("GTX 1070")
    .addField("i7-6700k")
    .addField("motherboard MSI Z170M MORTAR")
    .addField("Font XGX TS 750watts")
    .addField("RAM 32GB")
    .addField("Noteds Equipment")
    .addField("Mouse>> Zowie ZA13")
    .addField("Headphone>> HyperX RevolveR / hammerhead v2 pro")
    .addField("Mousepad>> Razer Gigantus")
    .addField("Keyboard>> Razer Blackwifow")
    .setColor(0xff0000)
   message.channel.sendEmbed(emebed);
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
