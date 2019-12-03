import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, spaces } from 'styles/variables'

const CardContainer = styled.div`
  background-color: ${colors.neutral_lightest};
  border: ${spaces.xtraSmall} solid ${colors.primary_dark};
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  font-weight: 700;
  text-decoration: underline;
  align-self: center;
`

const ImageContainer = styled.div`
  max-width: 50px;
  background: 
`

export class RecipeCard extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    ingredients: PropTypes.string,
    href: PropTypes.string,
    thumbnail: PropTypes.string,
  }

  render() {
    return (
      <CardContainer>
        <Title>{this.props.title}</Title>
        <ImageContainer><img src={this.props.thumbnail} alt={'recipe thumbnail'}/></ImageContainer>
        {this.props.ingredients}
        <br/>
        <a href={this.props.href}> Lien vers la recette </a>
        <br/>
      </CardContainer>
    )
  }
}

export default RecipeCard
