import {
  mediaMin,
  mediaMax,
  mediaOnly,
} from 'styles/mediaMixins'

describe('Media style mixin', () => {
  describe('mediaMin', () => {
    describe('Given mediaMin is called on existing size', () => {
      it('Should return min media query and content', () => {
        expect(mediaMin.sm('test')).toMatchSnapshot()
      })
    })
  })

  describe('mediaMax', () => {
    describe('Given mediaMax is called on existing size', () => {
      it('Should return max media query and content', () => {
        expect(mediaMax.sm('test')).toMatchSnapshot()
      })
    })
  })

  describe('mediaOnly', () => {
    describe('Given mediaOnly is called on existing min and max size', () => {
      it('Should return min and max media query and content', () => {
        expect(mediaOnly.sm('test')).toMatchSnapshot()
      })
    })

    describe('Given mediaOnly is called on existing max size', () => {
      it('Should return max media query and content', () => {
        expect(mediaOnly.xs('test')).toMatchSnapshot()
      })
    })

    describe('Given mediaOnly is called on existing min size', () => {
      it('Should return min media query and content', () => {
        expect(mediaOnly.xl('test')).toMatchSnapshot()
      })
    })
  })
})
