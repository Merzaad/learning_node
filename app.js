import { getName, getDir, getOsUptimeInHr, learnPromise, learnClosure, createPerson, createPersonWithAge } from './module.js'

// getName().then((result) => console.log(result))

// const dirname = getDir('/node/module.js')

// const uptime = getOsUptimeInHr()

// learnPromise()

// const closure = learnClosure('initialData')
// const { getState, setState } = closure()
// console.log(getState())
// setState('testClosure')
// console.log(getState())

const person = createPerson('M', 'H')
const personWithAge= createPersonWithAge(1, 'P')
console.log(personWithAge.nameAndage)
personWithAge.nameAndage = {name: 'M', age: 3}
console.log(personWithAge.nameAndage)
