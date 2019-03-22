const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

client.on('ready', () => {
    console.log('I am ready!');
    const embed = new Discord.RichEmbed()
        .setTitle("Phrino Dev Reload...")
        .setColor("#21E514")
        .setAuthor("Phrino Dev", "https://media.discordapp.net/attachments/557338439046135850/558691033437831188/Photo_20190322_133821.png?width=300&height=300")
        .setDescription("The bot was properly reloaded :white_check_mark:");
    client.channels.get("557348230245908482").send({embed});
});

const client = new Discord.Client();
const config = require("./config.json");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(process.env.BOT_TOKEN);