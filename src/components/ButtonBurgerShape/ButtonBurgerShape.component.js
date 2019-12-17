import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { spaces, colors, fontSizes } from 'styles/variables'

export const BurgerShape = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: ${spaces.large};
  width: ${spaces.large};
  border-radius: ${spaces.large} ${spaces.large} ${spaces.medium} ${spaces.medium};
  background:
  linear-gradient(0deg,
  ${colors.primary_default} 15%,
  ${colors.secondary_default} 27%,
  ${colors.tertiary_default} 47%,
  ${colors.secondary_light} 45%,
  ${colors.secondary_default} 60%,
  ${colors.primary_default} 79%);
  cursor: pointer;
  :focus {
    outline: none;
  }
`
export const ButtonText = styled.span`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${spaces.small};
  margin-bottom: ${spaces.small};
  font-size: ${fontSizes.px_14}
`

export class ButtonBurgerShape extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    onClick: PropTypes.func,
  }

  onActionClick = e => {
    if (this.props.onClick) {
      this.props.onClick()
    } else {
      e.preventDefault()
    }
  }

  render() {
    const { ...rest } = this.props
    return (
      <BurgerShape onClick={this.onActionClick} {...rest}>
        <ButtonText>{this.props.children}</ButtonText>
      </BurgerShape>
    )
  }
}

export default ButtonBurgerShape
