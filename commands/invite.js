const Discord = require ("discord.js");

exports.run = async (client, message, args, level) => {
    const embed = new Discord.RichEmbed()
    .setTitle("Radiant Air · Invite")
    .setDescription(`\n • RA group: https://www.roblox.com/groups/4710146/Radiant-Air#!/about \n • Join RA: https://discord.gg/ngf4ugg `)
    .setAuthor("Radiant Air", "https://media.discordapp.net/attachments/518552623775875084/579377766898860033/TRANSPARENT_2.png?width=241&height=241")
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
    description: "Links to Radiant Air.",
    usage: "invite"
  };