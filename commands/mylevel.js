exports.run = async (client, message, args, level) => {
    const friendly = client.config.permLevels.find(l => l.level === level).name;
    const embed = new Discord.RichEmbed()
      .setTitle("Phrino Dev · Permission")
      .setDescription(`Your level: ${level} \n Level name: ${friendly}`);
    message.channel.send({embed});
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "mylevel",
    category: "Miscelaneous",
    description: "Tells you your permission level for the current message location.",
    usage: "mylevel"
  };