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
        message.channel.send("Noted's config is :heavy_check_mark:️️ 
                             "Config: Aspect: 16:9    
                             "Sensitivity: 14/14      
                             "Res: 1920X1080      
                             "FOV: 90         
                             "ADS: 100       
                             "DPI: 400 default multiplier. dafault windows 6/11.       
                             ":heavy_check_mark:️️ 
                             "PC specs:     
                             "-GTX1070        
                             "-I7-6700k       
                             "-motherboard MSI Z170M MORTAR        
                             "-Font XGX TS 750watts      
                             "-32GB RAM :heavy_check_mark:️️   
                             "Equipments:    
                             "-Mouse: Zowie ZA13        
                             "-Headphone : HyperX RevolveR / hammerhead v2 pro (intra auricular)           
                              "-Mousepad : Razer Gigantus         
                               "-Keyboard : Blackwidow    
                                "-Monitor : BenqXL2420z");
    }

});

bot.login(process.env.token);
