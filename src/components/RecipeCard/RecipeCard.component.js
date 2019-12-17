import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { colors, spaces } from 'styles/variables'
import { mediaMin } from 'styles/mediaMixins'

export const CardContainer = styled.div`
  background-color: ${colors.neutral_lightest};
  border: ${spaces.xtraSmall} solid ${colors.primary_dark};
  display: flex;
  flex-direction: column;
  width: 80%;
  ${mediaMin.md(css`
    width: 90%;
  `)};
`
export const Title = styled.div`
  font-weight: 700;
  text-decoration: underline;
  align-self: center;
  padding: ${spaces.small};
`

export const ImageContainer = styled.div`
  min-width: ${spaces.xtraLarge};
  min-height: ${spaces.xtraLarge};
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const PlaceHolder = styled(ImageContainer)`
  background-color: ${colors.primary_light};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ImageIngredientsAndLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${spaces.medium};
`

export const IngredientsAndLink = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spaces.medium};
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
        <ImageIngredientsAndLink>
          {this.props.thumbnail
            ? <ImageContainer image={this.props.thumbnail}/>
            : <PlaceHolder> <span>Pas d&apos;image disponible :( </span></PlaceHolder>
          }

          <IngredientsAndLink>
            {this.props.ingredients}
            <a href={this.props.href}> Lien vers la recette </a>
          </IngredientsAndLink>
        </ImageIngredientsAndLink>
      </CardContainer>
    )
  }
}

export default RecipeCard
