const Discord = require ("discord.js");
exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  const shutdown = new Discord.RichEmbed()
      .setTitle("Phrino · Shutdown")
      .setDescription(`• Author of Shutdown: ` + message.author)
      .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
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