import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { spaces, colors } from 'styles/variables'
import H2 from 'components/H2'

export const InputField = styled.input`
  margin-left: ${spaces.medium};
  height: ${spaces.regular_large};
  width: 50%;
  :focus {
  outline: ${colors.primary_default} auto ${spaces.small};
  }
`

export const Label = styled(H2)`
  width: 50%;
 `

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
  width: 100%;
  justify-content: center;
`
export class Input extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string,
  }

  render() {
    const { ...rest } = this.props
    return (
      <InputContainer>
        <Label>
          {this.props.label}
        </Label>
        <InputField {...rest} />
      </InputContainer>
    )
  }
}

export default Input
