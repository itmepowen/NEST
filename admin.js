const {kafka} = require('./client')
async function init(){
    const admin = kafka.admin();
    console.log("Admin connecting... ")
    admin.connect()
    console.log("Admin connection Success...")
    
    console.log("creating topics  [rider-updates]")
    await admin.createTopics({
        topics:[{
            topic: 'rider-updates',
            numPartitions: 2,

        }]
    })
    console.log("topics created success [rider-updates]")
    console.log("disconnecting admin... ")
    await admin.disconnect()
}

init()