const { Kafka } = require("kafkajs");

var kafka_brokers = process.env.PRIVATE_IP + ":9092"

exports.kafka = new Kafka({
  clientId: "my-app",
  brokers: [kafka_brokers],
});