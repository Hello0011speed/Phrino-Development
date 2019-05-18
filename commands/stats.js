const { version } = require("discord.js");
const Discord = require ("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  const embed = new Discord.RichEmbed()
      .setTitle("Phrino · Stats")
      .setDescription(`\n • Mem Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB \n • Uptime: ${duration} \n • Users: ${client.users.size.toLocaleString()} \n • Servers: ${client.guilds.size.toLocaleString()} \n • Channels: ${client.channels.size.toLocaleString()}`)
      .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
      .setColor("#E51414")
      .setTimestamp();
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "stats",
  category: "Miscelaneous",
  description: "Gives some useful bot statistics",
  usage: "stats"
};

//`= STATISTICS =
//• Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
//• Uptime     :: ${duration}
//• Users      :: ${client.users.size.toLocaleString()}
//• Servers    :: ${client.guilds.size.toLocaleString()}
//• Channels   :: ${client.channels.size.toLocaleString()}
//• Discord.js :: v${version}
//• Node       :: ${process.version}`, {code: "asciidoc"}