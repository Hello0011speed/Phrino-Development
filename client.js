const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
    const embed = new Discord.RichEmbed()
        .setTitle("Phrino Dev Reload...")
        .setColor("#21E514")
        .setAuthor("Phrino Dev", "https://media.discordapp.net/attachments/557338439046135850/558691033437831188/Photo_20190322_133821.png?width=300&height=300")
        .setDescription("The bot was properly reloaded :white_check_mark:");
    client.channels.get("557348230245908482").send({embed});
})



client.login(process.env.BOT_TOKEN);