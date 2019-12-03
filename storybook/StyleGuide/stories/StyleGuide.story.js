import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import * as styleVariables from 'styles/variables'

const StorybookDiv = styled.div``

const StorybookTitle = styled.h1`
  text-align: center;
  color: grey;
`

const PlayfairDisplaytRegular = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
`
const PlayfairDisplayBold = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

`
const ColorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  background-color: white;
`

const OneColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 10px;
`
const Label = styled.div`
  display: flex;
  justify-content: center;
  width: 192px;
`

const Color = styled.div`
  display: flex;
  background-color: ${props => props.color};
  height: 200px;
  width: 200px;
  border: 1px solid grey;
`
// eslint-disable-next-line react/prop-types
const ColorComponent = ({ name, color }) => (
  <OneColorContainer key={`${name}-${color}`}>
    <Label>{name.split('_').join(' ')}</Label> {/* eslint-disable-line react/prop-types */}
    <Label> {color} </Label>
    <Color color={color}/>
  </OneColorContainer>
)
const renderColor = color => <ColorComponent key={color} name={color[0]} color={color[1]}/>

const ColorsComponent = () =>
  Object.entries(styleVariables.palette).map(color => renderColor(color))

storiesOf('StyleGuide', module)
  .add('Polices', () => (
    <StorybookDiv>
      <StorybookTitle>Polices</StorybookTitle>
      <PlayfairDisplaytRegular> Ceci est la police 1 Regular </PlayfairDisplaytRegular>
      <br/>
      <PlayfairDisplayBold> Ceci est la police 1 Bold </PlayfairDisplayBold>
      <br/>
    </StorybookDiv>
  ))
  .add('Colors', () => (
    <StorybookDiv>
      <StorybookTitle>Couleurs</StorybookTitle>
      <ColorsContainer>
        <ColorsComponent/>
      </ColorsContainer>
    </StorybookDiv>
  ))
