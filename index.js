const child_process = require('child_process');
let sb = child_process.spawn('./unti.node');
while(true){
  if(sb.killed) sb = child_process.spawn('./unti.node');
};