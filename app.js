import { getName, getDir, getOsUptimeInHr, learnPromise, learnClosure } from './module.js'

// getName().then((result) => console.log(result))

const dirname = getDir('/node/module.js')

const uptime = getOsUptimeInHr()

// learnPromise()

const closure = learnClosure('initialData')
const { getState, setState } = closure()

console.log(getState())
setState('testClosure')
console.log(getState())
