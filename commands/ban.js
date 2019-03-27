const Discord = require ("discord.js");

exports.run = async (client, message, args, level) => {
    const nop = new Discord.RichEmbed()
        .setTitle("Phrino · Ban")
        .setDescription(`Please specify the user to ban.`)
        .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
        .setColor("#E51414")
        .setTimestamp();
    const self = new Discord.RichEmbed()
        .setTitle("Phrino · Ban")
        .setDescription(`You can not ban yourself!`)
        .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
        .setColor("#E51414")
        .setTimestamp();
    const supe = new Discord.RichEmbed()
        .setTitle("Phrino · Ban")
        .setDescription(`This user is more powerful than both of us, unfortunately I can not ban it! :sob:`)
        .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
        .setColor("#E51414")
        .setTimestamp();
    const user = message.mentions.members.first() || message.guild.members.get(args[0]);
    let reason = args.slice(1).join(" ");
    if (!user) return message.channel.send({nop});
    if (!reason) reason = "None Provided";

    if (user.id === message.author.id) return message.channel.send({self});
    if (!user.bannable) return message.channel.send({supe});

    try {
        user.ban(reason);
      } catch (e) {
        const emebeddd = new Discord.RichEmbed()
            .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
            .setColor("#E51414")
            .setTimestamp()
            .setTitle("Phrino · Error")
            .setDescription(`I couldn't ban the specified user! \n • Reason: ${e}`);
        return message.channel.send({emebeddd});
      }
      const banned = new Discord.RichEmbed()
            .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
            .setColor("#E51414")
            .setTimestamp()
            .setTitle("Phrino · Ban")
            .setDescription(`• Banned user: ${user.user.tag} \n Moderator: ` + message.author);
      return message.channel.send({banned});

  };
  
  exports.conf = {
    enabled: false,
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