const server = require("./server");
const config = require("./config");
const Database = require("./database");
const connectionString =
  "mongodb+srv://admin:admin@cluster0.ijy8j.mongodb.net/tododb?retryWrites=true&w=majority";

async function main() {
  await Database.instance.connect(connectionString);
  server.listen(config.PORT, config.HOST, () => {
    console.log("server is running...");
  });
}

main();
