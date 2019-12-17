import { getRandomNItems, getRandomInt } from 'services/random.service'

describe('random service', () => {
  beforeAll(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5)
    jest.spyOn(global.Math, 'floor')
    jest.spyOn(Array.prototype, 'sort').mockReturnValue([5, 4, 3, 2, 1])
  })
  afterAll(() => {
    jest.restoreAllMocks()
  })
  describe('getRandomInt', () => {
    it('should call Math.floor and Math.random to get random number', () => {
      const result = getRandomInt(5)
      expect(global.Math.floor).toHaveBeenCalledTimes(2)
      expect(global.Math.floor).toHaveBeenNthCalledWith(1, 5)
      expect(global.Math.floor).toHaveBeenNthCalledWith(2, 0.5 * 5)
      expect(global.Math.random).toHaveBeenCalledTimes(1)
      expect(result).toBe(Math.floor(0.5 * 5))
    })
  })
  describe('getRandomNItems', () => {
    const array = [1, 2, 3, 4, 5]
    it('should call sort array and return n items', () => {
      const result = getRandomNItems(array, 2)
      expect(result).toEqual([5, 4])
    })
  })
})


