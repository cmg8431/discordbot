const Discord = require(`discord.js`); 
const client = new Discord.Client(); 
const { prefix, token } = require('./config.json');


client.once('ready', () => {
  console.log("DISOCRD BOT LOGIN");
});

client.on('message', message => {
  console.log(message.content);

});

// 여러분의 디스코드 토큰으로 디스코드에 로그인합니다
client.login("token");

