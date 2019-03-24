exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    let messageToSend = message.content.split(" ").slice(2).join(" ");
    let userToSend = message.mentions.users.first();
    

    userToSend.send(messageToSend);
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["md", "msg"],
    permLevel: "Bot Staff"
  };
  
  exports.help = {
    name: "dm",
    category: "Staff Moderation",
    description: "We use it to send you a DM when something is wrong or if we need you for some reason! :D",
    usage: "dm (user tag) (message)"
  };