import path from 'path'
import os from 'os'

const getName = async () => {
  const promise = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve('M'), 1000)
    })
  const result = await promise()
  return result
}

const getDir = (pathString) => path.dirname(pathString)
const getOsUptimeInHr = () => {
  const uptimInSec = os.uptime()
  return `uptime: ${Math.floor(uptimInSec / 3600)}hrs`
}

export { getName, getDir, getOsUptimeInHr }
