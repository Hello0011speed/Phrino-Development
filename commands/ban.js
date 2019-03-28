exports.run = async (reply, message, args, level) => {
  const user = message.mentions.members.first() || message.guild.members.get(args[0]);
  let reason = args.slice(1).join(" ");
  if (!user) return reply("Please specify an user to ban.");
  if (!reason) reason = "None Provided";

  if (user.id === message.author.id) return reply("You can not ban yourself!");
  if (!user.bannable) return reply("This user is more powerful than both of us, unfortunately I can not ban it! :sob:");

  try {
    user.ban(reason);
  } catch (e) {
    return message.channel.send(`I couldn't ban the specified user! Reason: ${e}.`);
  }

  return reply(`Successfully banned **${user.user.tag}** from this server.`);

};
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "Administrator"
};
  
  exports.help = {
    name: "ban",
    category: "Moderation",
    description: "Bans an user from your server.",
    usage: "ban"
  };

  //    const nop = new Discord.RichEmbed()
  //.setTitle("Phrino · Ban")
  //.setDescription(`Please specify the user to ban.`)
  //.setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
  //.setColor("#E51414")
  //.setTimestamp();
//const self = new Discord.RichEmbed()
 // .setTitle("Phrino · Ban")
  //.setDescription(`You can not ban yourself!`)
  
  //.setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
 // .setColor("#E51414")
  //.setTimestamp();
//const supe = new Discord.RichEmbed()
 // .setTitle("Phrino · Ban")
  //.setDescription(`This user is more powerful than both of us, unfortunately I can not ban it! :sob:`)
  //.setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
  //.setColor("#E51414")
  //.setTimestamp();
  //const banned = new Discord.RichEmbed()
  //.setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
  //.setColor("#E51414")
  //.setTimestamp()
  //.setTitle("Phrino · Ban")
 // .setDescription(`• Banned user: ${user.user.tag} \n Moderator: ` + message.author);

// const emebeddd = new Discord.RichEmbed()
// .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
//// .setColor("#E51414")
// .setTimestamp()
// .setTitle("Phrino · Error")
// .setDescription(`I couldn't ban the specified user! \n • Reason: ${e}`);