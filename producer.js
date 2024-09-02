const { kafka } = require("./client");
const producer = kafka.producer();

async function init() {
  console.log("Connecting Producer");
  await producer.connect();
  console.log("Producer Connected Successfully");
}

init();

async function sendKafka(username, message) {
  await producer.send({
    topic: "messages",
    messages: [
      {
        value: JSON.stringify({ username: username, message: message })
      },
    ],
  });
}

process.on('exit', async function () {
  console.log("Producer Disconnected")
  await producer.disconnect();
})

module.exports = { sendKafka }