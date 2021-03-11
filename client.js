const net = require('net');
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on("data", (dataFromServer) => {
    console.log('Message from server:', dataFromServer);
  });

  conn.on("connect", () => {
    console.log("successfully connected to game server");
    conn.write('Name: MDR');
  });
  /*       const interval = () => {
    return Math.floor(Math.random() * 100) + 300;
  };
    conn.write('Move: up'); //  move up one square (unless facing down)
    setTimeout(() => {
      conn.write('Move: up');
      setTimeout(() => {
        conn.write('Move: up');
        setTimeout(() => {
          conn.write('Move: left');
          setTimeout(() => {
            conn.write('Move: left');
            setTimeout(() => {
              conn.write('Move: left');
              setTimeout(() => {
                conn.write('Move: down');
              }, interval());
            }, interval());
          }, interval());
        }, interval());
      }, interval());
    }, interval());
  */


  return conn;
};


// console.log('Connecting ...');
// connect();

module.exports = {connect};

/* "Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left) */