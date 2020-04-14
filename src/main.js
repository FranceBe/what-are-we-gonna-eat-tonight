import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from 'styles/global-styles'
import App from 'containers/App'
import 'img/food.png'

const MainApp = () => {
  return (
    <>
      <GlobalStyle />
      <App/>
    </>
  )
}
ReactDOM.render(<MainApp/>,
  document.getElementById('root')
)
