const Discord = require ("discord.js");
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    let messageToSend = message.content.split(" ").slice(2).join(" ");
    let userToSend = message.mentions.users.first();
    const embed = new Discord.RichEmbed()
      .setTitle("Radiant Air · Staff Direct Message")
      .setDescription(`Message: ` + messageToSend + `\n Author: ` + message.author)
      .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
      .setColor("#E51414")
      .setTimestamp();
    const embeds = new Discord.RichEmbed()
      .setTitle("Radiant Air · Staff Direct Message Logs")
      .setDescription(`• Message: ` + messageToSend + `\n • User:` + userToSend + `\n • Author: ` + message.author)
      .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
      .setColor("#E51414")
      .setTimestamp();
    
    
    userToSend.send(embed);
    client.channels.get("584105574296191028").send(embeds);
    
    
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["md", "msg"],
    permLevel: "Bot Staff"
  };
  
  exports.help = {
    name: "dm",
    category: "Staff Moderation",
    description: "We use it to send you a DM when something is wrong or if we need you for some reason! :D",
    usage: "dm (user tag) (message)"
  };