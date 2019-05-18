const Discord = require ("discord.js");

exports.run = async (client, message, args, level) => {
    const friendly = client.config.permLevels.find(l => l.level === level).name;
    const embed = new Discord.RichEmbed()
    .setTitle("Phrino · Level")
    .setDescription(`\n • Permission Level: ${level} \n • Permission Rank: ${friendly} `)
    .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
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