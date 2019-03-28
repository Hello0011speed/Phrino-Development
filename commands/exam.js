exports.run = async (client, message, args, level) => {
  let userrole = args.join(' ');                                
  guild.roles.create({
data: {
name: `${userrole}`,
color: 'BLUE',
}
});
};
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "Co-Founders"
};
  
  exports.help = {
    name: "exam",
    category: "System",
    description: "Secret Article! :P",
    usage: "exam"
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