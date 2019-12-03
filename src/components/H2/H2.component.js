import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fontSizes, spaces, colors } from 'styles/variables'

export const H2Default = styled.h2`
  font-size: ${fontSizes.px_20};
  text-align: center;
  text-shadow: ${spaces.xtraSmall} ${spaces.xtraSmall} ${colors.primary_default};
`

export class H2 extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any,
  }

  render() {
    return (
      <H2Default>{this.props.children}</H2Default>
    )
  }
}

export default H2
