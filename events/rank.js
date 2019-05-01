const roblox = require('noblox.js')
const Discord = require('discord.js')
const client = new Discord.Client();


var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_3FD241142A223C8ADA74C40D0C268736625E3CBE2609CFBF4F659013AB00B379949444A9D3F0285D057B1C4980DF95ADBBCAEF309317859CE03ACD93E07425C6261DE8DA7B299F5FD8CDB034D794DE4112CBE3198B0148020FCDEF5D8FBF1594A9E62A0BEF089CFF4B01629B57DF8D9CBDBDA888665806635CC2FE50B6540BD3EDBB9A1371B27C921B8D367D259DDAE9A40AC3F1CB4C38C9F2C68E238A579093551FC9051333687EB192FC9250AFC16A019559F29379A3C28A429E09E7F2B915DDBCFD7FB7C6E5B9258F40A1604C5EDDA6203ACB9B82CDE76AF57DEC432D565A8814E3D1B7239A63CA596035E6035FF288850F3ED2CFE5CF01ADB5452B6C504B5D5FD044C21E01BC352BDB511AA66D86A66309C935F33CB2A75EA625EBF088382CA76DBD3D16FA47CBA09491C9FE936E2465954D";
var prefix = '!';
var groupId = 4710146;
var maximumRank = 5;
 
function login() {
    return roblox.cookieLogin(cookie);
}
 
login() // Log into ROBLOX
    .then(function() { // After the function has been executed
        console.log('Logged in.') // Log to the console that we've logged in
    })
    .catch(function(error) { // This is a catch in the case that there's an error. Not using this will result in an unhandled rejection error.
        console.log(`Login error: ${error}`) // Log the error to console if there is one.
    });
 
function isCommand(command, message){
    var command = command.toLowerCase();
    var content = message.content.toLowerCase();
    return content.startsWith(prefix + command);
}
 
client.on('message', (message) => {
    if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
   
    if(isCommand('rank', message)){
       if(!message.member.roles.some(r=>["SHR"].includes(r.name)) ) // OPTIONAL - Checks if the sender has the specified roles to carry on further
        return message.reply("You can't use this command.");
        var username = args[1]
        var rankIdentifier = Number(args[2]) ? Number(args[2]) : args[2];
        if (!rankIdentifier) return message.channel.send("Please enter a rank");
        if (username){
            message.channel.send(`Checking ROBLOX for ${username}`)
            roblox.getIdFromUsername(username)
            .then(function(id){
                roblox.getRankInGroup(groupId, id)
                .then(function(rank){
                    if(maximumRank <= rank){
                        message.channel.send(`${id} is rank ${rank} and not promotable.`)
                    } else {
                        message.channel.send(`${id} is rank ${rank} and promotable.`)
                        roblox.setRank(groupId, id, rankIdentifier)
                        .then(function(newRole){
                            message.channel.send(`Changed rank to ${newRole.Name}`)
                        }).catch(function(err){
                            console.error(err)
                            message.channel.send("Failed to change rank.")
                        });
                    }
                }).catch(function(err){
                    message.channel.send("Couldn't get that player in the group.")
                });
            }).catch(function(err){
                message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
          });
      } else {
          message.channel.send("Please enter a username.")
      }
      return;
  }
});

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.

  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;

  // Also good practice to ignore any message that does not start with our prefix,
  // which is set in the configuration file.
  if(message.content.indexOf("-") !== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice("-".length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Let's go with a few common example commands! Feel free to delete or change those.
 if(command === "d") {
   if(message.author.id !== "292337076395966492") return;
    const sayMessage = args.join(" ");
    
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
    message.channel.send(sayMessage)
   message.channel.startTyping();
   message.channel.stopTyping();
 }
});