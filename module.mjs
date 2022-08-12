const getName = async () => {
  const promise = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve('M'), 2000)
    })
  const result = await promise()
  return result
}

export { getName }
