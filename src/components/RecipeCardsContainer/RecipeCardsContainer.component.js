import styled from 'styled-components'
import { spaces } from 'styles/variables'

export const RecipeCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: ${spaces.regular} 0;
  & div:not(:last-of-type) {
    margin-bottom: ${spaces.medium};
  }
`
