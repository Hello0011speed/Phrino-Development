const Discord = require ("discord.js");

exports.run = async (client, message, args, level) => {
    const friendly = client.config.permLevels.find(l => l.level === level).name;
    const embed = new Discord.RichEmbed()
    .setTitle("Radiant Air · Level")
    .setDescription(`\n • Permission Level: ${level} \n • Permission Rank: ${friendly} `)
    .setAuthor("Radiant Air", "https://media.discordapp.net/attachments/518552623775875084/579377766898860033/TRANSPARENT_2.png?width=241&height=241")
    .setColor("#E51414")
    .setTimestamp();
message.channel.send(embed);
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["ml"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "mylevel",
    category: "Miscelaneous",
    description: "Tells you your permission level for the current message location.",
    usage: "mylevel"
  };