const Discord = require(`discord.js`); // discord.js를 불러옴
const client = new Discord.Client(); // 새로운 디스코드 클라이언트를 만듬
// 만약에 클라이언트가 준비되었다면, 아래의코드를 실행합니다
// 이 이벤트는 봇이 로그인 되고 한번만 실행될것입니다
client.once('ready', () => {
  console.log("디스코드 봇이 준비되었습니다");
});

client.on('message', message => {
  console.log(message.content);
  if(message.content === '/시험범위'){
    message.channel.send('https://media.discordapp.net/attachments/781156914486706186/788128230896435250/2ca7be45312018e6.PNG?width=511&height=527');
  }
  if(message.content === '/시간표'){
    message.channel.send('https://media.discordapp.net/attachments/781156914486706186/786899197906518026/00.PNG?width=634&height=527');
  }
  if(message.content === '/국어'){
    message.channel.send('https://zoom.us/j/8654366972?pwd=QkgxUFJCZlArVjRpWXp0Z0FIdHg2UT09#success');
  }
  if(message.content === '/영어'){
    message.channel.send('https://zoom.us/j/8654366972?pwd=QkgxUFJCZlArVjRpWXp0Z0FIdHg2UT09#success');
  }
  if(message.content === '/국사'){
    message.channel.send('https://zoom.us/j/4186922475?pwd=NU9RRHdjQTdBeHJLTHRPUFhNVkM5UT09#success');
  }
  if(message.content === '/컴시'){
    message.channel.send('https://us04web.zoom.us/j/7453682189?pwd=ZUJNUGVPaFpaWDFwZk0vTFVNaTZoZz09');
  }
  if(message.content === '/프밍'){
    message.channel.send('https://us04web.zoom.us/j/9979120043?pwd=WVJkaTV4VzIwSTM5c1NDZ1d6amdJdz09#success');
  }
  if(message.content === '/수학'){
    message.channel.send('https://zoom.us/j/8835548393?pwd=KzhnTE5uMHFFTUI5LzhKcWRHejZsdz09#success');
  }
  if(message.content === '/과학'){
    message.channel.send('https://us04web.zoom.us/j/6474168660?pwd=MEdGdEJPL2NIdFRUNmE0QURzb3IxZz09#success');
  }
  if(message.content === '/체육'){
    message.channel.send('https://zoom.us/j/5178577141?pwd=WDRwcnpxWjViT01PeEZwMWdFNEVBUT09#success]');
  }
  if(message.content === '/조회'){
    message.channel.send('https://zoom.us/j/4186922475?pwd=NU9RRHdjQTdBeHJLTHRPUFhNVkM5UT09');
  }else if(message.content === '/종례'){
    message.channel.send('https://zoom.us/j/4186922475?pwd=NU9RRHdjQTdBeHJLTHRPUFhNVkM5UT09');
  }

});

// 여러분의 디스코드 토큰으로 디스코드에 로그인합니다
client.login(process.env.token);

