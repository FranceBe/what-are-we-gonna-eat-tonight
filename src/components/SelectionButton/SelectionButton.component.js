import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { spaces, colors, fontSizes } from 'styles/variables'


const buttonStyle = props => `
  background-color: ${props.isActive ? colors.primary_default : colors.neutral_lightest};
  color: ${props.isActive ? colors.neutral_lightest : colors.primary_dark};
  text-decoration: ${props.isActive ? 'underline' : 'none'};
`
export const SingleButton = styled.button`
  ${props => buttonStyle(props)};
  height: ${spaces.large};
  width: ${spaces.xxtraLarge};
  font-size: ${fontSizes.px_14};
  font-weight: 700;
  border: none;
  :focus {
  outline: none;
  }
`
export const ButtonsContainer = styled.div`
  button:first-of-type {
    border-radius: ${spaces.medium} 0 0 ${spaces.medium};
    border: ${spaces.xtraSmall} solid ${colors.primary_default};
  }
   button:last-of-type {
    border-radius: 0 ${spaces.medium} ${spaces.medium} 0;
    border-top: ${spaces.xtraSmall} solid ${colors.primary_default};
    border-right: ${spaces.xtraSmall} solid ${colors.primary_default}; 
    border-bottom: ${spaces.xtraSmall} solid ${colors.primary_default};
  }
`

export class SelectionButton extends React.PureComponent {
  static propTypes = {
    firstOption: PropTypes.string.isRequired,
    secondOption: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedOption: PropTypes.string.isRequired,
  }

  render() {
    return (
      <ButtonsContainer>
        <SingleButton
          onClick={() => this.props.onSelect(this.props.firstOption)}
          isActive={this.props.selectedOption === this.props.firstOption}
        >
          {this.props.firstOption}
        </SingleButton>
        <SingleButton
          onClick={() => this.props.onSelect(this.props.secondOption)}
          isActive={this.props.selectedOption === this.props.secondOption}
        >
          {this.props.secondOption}
        </SingleButton>
      </ButtonsContainer>
    )
  }
}

export default SelectionButton
