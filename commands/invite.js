const Discord = require ("discord.js");

exports.run = async (client, message, args, level) => {
    const embed = new Discord.RichEmbed()
    .setTitle("Phrino · Invite")
    .setDescription(`\n • Add Phrino: https://discordapp.com/oauth2/authorize?client_id=521164858742538289&scope=bot&permissions=8 \n • Join Phrino: https://discord.gg/XqUa92C `)
    .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
    .setColor("#E51414")
    .setTimestamp();
message.channel.send(embed);
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["iv"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "invite",
    category: "Miscelaneous",
    description: "Links to add Phrino to your server or join support server.",
    usage: "invite"
  };