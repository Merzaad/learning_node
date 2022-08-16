import path from 'path'
import os from 'os'

const getDir = (pathString) => path.dirname(pathString)
const getOsUptimeInHr = () => {
  const uptimInSec = os.uptime()
  return `uptime: ${Math.floor(uptimInSec / 3600)}hrs`
}

const getName = async () => {
  const promise = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve('M'), 1000)
    })
  const result = await promise()
  return result
}

const learnPromise = () => {
  const getTime = () => new Date().getTime()
  const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve('resolved1'), 2000)
    console.log('executed1')
  })
  const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve('resolved2'), 4000)
    console.log('executed2')
  })
  setTimeout(() => {
    console.log(`--------- ${getTime()}`)
    promise1.then((resolved) => {
      console.log(`${resolved} ${getTime()}`)
    })
    promise2.then((resolved) => {
      console.log(`${resolved} ${getTime()}`)
    })
  }, 3000)
}

const learnClosure = (initial = null) => {
  const state = { initial, data: null }
  const setState = (newData) => {
    state.initial = null
    state.data = newData
  }
  const getState = () => (state.initial ? state.initial : state.data)
  const closure = () => {
    return {
      getState,
      setState,
    }
  }
  return closure
}

export { getName, getDir, getOsUptimeInHr, learnPromise, learnClosure }
