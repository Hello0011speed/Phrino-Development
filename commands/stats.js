const { version } = require("discord.js");
const Discord = require ("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  const embed = new Discord.RichEmbed()
      .setTitle("Radiant Air · Stats")
      .setDescription(`\n • Mem Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB \n • Uptime: ${duration} \n • Users: ${client.users.size.toLocaleString()} \n • Servers: ${client.guilds.size.toLocaleString()} \n • Channels: ${client.channels.size.toLocaleString()}`)
      .setAuthor("Radiant Air", "https://media.discordapp.net/attachments/518552623775875084/579377766898860033/TRANSPARENT_2.png?width=241&height=241")
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