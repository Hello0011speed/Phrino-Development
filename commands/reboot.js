const Discord = require ("discord.js");
exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  const shutdown = new Discord.RichEmbed()
      .setTitle("Radiant Air · Shutdown")
      .setDescription(`• Author of Shutdown: ` + message.author)
      .setAuthor("Radiant Air", "https://media.discordapp.net/attachments/518552623775875084/579377766898860033/TRANSPARENT_2.png?width=241&height=241")
      .setColor("#E51414")
      .setTimestamp();
    await message.channel.send(shutdown);
    client.commands.forEach( async cmd => {
      await client.unloadCommand(cmd);
    });
    process.exit(1);
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Founder"
  };
  
  exports.help = {
    name: "reboot",
    category: "System",
    description: "Shuts down the bot. If running under PM2, bot will restart automatically.",
    usage: "reboot"
  };