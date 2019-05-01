const Discord = require ("discord.js");

exports.run = async (client, message, args, level) => {
    const settings = message.settings;
    if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
        await message.guild.createChannel('logs', 'text');
    };


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