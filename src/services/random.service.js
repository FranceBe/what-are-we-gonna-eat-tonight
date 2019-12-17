export const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max))
}

export const getRandomNItems = (array, n) => {
  const shuffled = array.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, n)
}
