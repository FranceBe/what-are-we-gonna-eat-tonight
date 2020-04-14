import { spaces, colors, fontSizes, palette } from 'styles/variables'

describe('variables', () => {
  describe('spaces', () => {
    it('should match snapshot', () => {
      expect(spaces).toMatchSnapshot()
    })
  })
  describe('colors', () => {
    it('should match snapshot', () => {
      expect(colors).toMatchSnapshot()
    })
  })
  describe('fontSizes', () => {
    it('should match snapshot', () => {
      expect(fontSizes).toMatchSnapshot()
    })
  })
  describe('palette', () => {
    it('should match snapshot', () => {
      expect(palette).toMatchSnapshot()
    })
  })
})
