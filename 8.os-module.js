const os = require('os')
// Info about the current user
const user = os.userInfo()
console.log(user);

// methods return the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeaMem: os.freemem(),
}
console.log(currentOS);