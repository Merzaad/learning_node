import { getName, getDir, getOsUptimeInHr, learnPromise } from './module.mjs'

getName().then((result) => console.log(result))
const dirname = getDir('/node/module.mjs')
const uptime = getOsUptimeInHr()

learnPromise()