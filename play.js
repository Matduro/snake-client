// play.js
const { connect } = require('./client');
console.log('Connecting ...');
connect();

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();


  // \u0003 maps to ctrl+c input
  const handleUserInput = process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      conn.write('Move: up');
    }
    if (key === 's') {
      conn.write('Move: down');
    }
    if (key === 'd') {
      conn.write('Move: right');
    }
    if (key === 'a') {
      conn.write('Move: left');
    }
    if (key === 'l') {
      conn.write('Say: TSS');
    }
  });
  return stdin;
};


setupInput();