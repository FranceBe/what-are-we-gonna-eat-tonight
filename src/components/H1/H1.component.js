import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fontSizes, spaces, colors } from 'styles/variables'

export const H1Default = styled.h1`
  font-size: ${fontSizes.px_30};
  text-align: center;
  text-shadow: ${spaces.xtraSmall} ${spaces.xtraSmall} ${colors.primary_default};
`

export class H1 extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any,
  }

  render() {
    return (
      <H1Default>{this.props.children}</H1Default>
    )
  }
}

export default H1
