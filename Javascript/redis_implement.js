const net = require('net');
const Parser = require('redis-parser');
const store = {};

const server = net.createServer((connection) => {
  console.log("Client Connected...");

  connection.on('data', (data) => {
    const parser = new Parser({
      returnReply: (reply) => {
        const command = reply[0].toLowerCase(); // Case-insensitive commands
        switch (command) {
          case 'set': {
            const key = reply[1];
            const value = reply[2];
            store[key] = value;
            connection.write("+OK\r\n"); // Successful SET
            break;
          }
          case 'get': {
            const key = reply[1];
            const value = store[key];
            if (!value) {
              connection.write("$-1\r\n"); // Key not found
            } else {
              connection.write(`$${value.length}\r\n${value}\r\n`); // Proper GET response
            }
            break;
          }
          default: {
            connection.write("-ERR unknown command\r\n"); // Handle unknown commands
            break;
          }
        }
      },
      returnError: (error) => {
        console.error("Error:", error);
        connection.write(`-Error ${error.message}\r\n`); // Send error to client
      }
    });

    parser.execute(data);
  });
});

server.listen(7000, () => {
  console.log("Custom Redis Server running on port 7000.");
});
