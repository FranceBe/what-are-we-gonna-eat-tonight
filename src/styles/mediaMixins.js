/* eslint-disable no-param-reassign */

import { css } from 'styled-components'

export const minSizes = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
  xxxl: 2100,
}
export const mediaMin = Object.keys(minSizes).reduce((acc, label) => {
  acc[label] = arg => css`
    @media (min-width: ${minSizes[label] / 16}em) {
      ${arg}
    }
  `
  return acc
}, {})

const maxSizes = {
  xs: 575,
  sm: 767,
  md: 991,
  lg: 1199,
  xl: 1599,
  xxl: 2199,
}
export const mediaMax = Object.keys(maxSizes).reduce((acc, label) => {
  acc[label] = arg => css`
    @media (max-width: ${maxSizes[label] / 16}em) {
      ${arg}
    }
  `
  return acc
}, {})

const onlySizes = {
  xs: {
    max: maxSizes.sm,
  },
  sm: {
    min: minSizes.sm,
    max: maxSizes.md,
  },
  md: {
    min: minSizes.md,
    max: maxSizes.lg,
  },
  lg: {
    min: minSizes.lg,
    max: minSizes.xl,
  },
  xl: {
    min: minSizes.xl,
  },
}

function returnMinMedia(size) {
  return size ? `(min-width: ${size / 16}em)` : ''
}

function returnMaxMedia(size) {
  return size ? `(max-width: ${size / 16}em)` : ''
}

function returnAnd(minSize, maxSize) {
  return minSize && maxSize ? ' and ' : ''
}

export const mediaOnly = Object.keys(onlySizes).reduce((acc, label) => {
  acc[label] = arg => css`
    @media ${returnMinMedia(
    onlySizes[label].min
  )}${returnAnd(onlySizes[label].min, onlySizes[label].max)}${returnMaxMedia(
  onlySizes[label].max
)} {
      ${arg}
    }
  `
  return acc
}, {})
