import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from 'styles/global-styles'
import App from 'containers/App'

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
