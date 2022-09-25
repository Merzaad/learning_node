const closureWraper = () => {
  let x = 0
  const setValue = (value) => {
    console.log(`changed from ${x} to ${value}`)
    x = value
  }
  const getValue = () => x
  return { setValue, getValue }
}

const input = document.getElementById('input')
/* const { setValue, getValue } = closureWraper() */

x = 0
const setValue = (value) => {
  console.log(`changed from ${x} to ${value}`)
  x = value
}
const getValue = () => x

document.getElementById('401').addEventListener('click', () => console.log(getValue()))
document.getElementById('set').addEventListener('click', () => setValue(Number(input.value)))
