const {Kafka} = require("kafkajs")

exports.kafka = new Kafka({
    clientId:'myapp',
    brokers: ['192.168.1.37:9092']
})
