// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const secret = 'SUPER SECRET'
const john = 'john'
const peter = 'peter'

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

sayHi('Vini')
sayHi(john)
sayHi(peter)


const names = require('./4.names')
// const {names} = require('./4.names')
const sayHi = require('./5.util')
// console.log(names)
const data = require('./6.alternative-flavor')
// console.log(data);

// sayHi('susan')
// sayHi(names.john)    // Hello there johnn
// sayHi(names)    // Hello there undefined

// const secret = 'SUPER SECRET'
// const john = 'john'
// const peter = 'peter'

require('./7.mind_grenade')