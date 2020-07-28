const readline = require('readline');
const { parse } = require('path');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

let timeOutVar;

process.stdin.on('keypress', (str, key) => {  
  let parsedInput = parseInt(key.name)
  if (key.sequence === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  } else if (!(parsedInput === 'Nan') && parsedInput > 0 && parsedInput <= 9) {
    clearTimeout(timeOutVar);
    console.log(`Setting timer for ${parsedInput} seconds...`);
    timeOutVar = setTimeout(() => {
      process.stdout.write('\u0007');
    }, (parsedInput * 1000));
  } else if (key.name === 'b') {
    clearTimeout(timeOutVar);
    process.stdout.write('\x07');
    timeOutVar = false;
  }
});

console.log('Enter any number between 1-9 to set an alarm for that many seconds. \n Press b to make the alarm beep right away. \n Ctrl + c to exit program. \n');