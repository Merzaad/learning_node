const closureWraper = () => {
  let state = 0
  const setValue = (value) => {
    document.getElementById('print').innerHTML = `changed: ${state} to ${value}`
    state = value
  }
  const getValue = () => {
    document.getElementById('console').innerHTML = `state: ${state}`
  }
  return { setValue, getValue }
}

const input = document.getElementById('input')
const { setValue, getValue } = closureWraper()

document.getElementById('401').addEventListener('click', () => console.log(getValue()))
document.getElementById('set').addEventListener('click', () => setValue(input.value || 'empty'))
