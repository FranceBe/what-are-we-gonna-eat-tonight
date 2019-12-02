import React from 'react'

export class App extends React.PureComponent {
  componentDidMount() {
    fetch('api/puppy')
      .then(res => res.json())
      .then(data => console.log(data.results))
      .catch(err => {
        throw Error(err)
      })
  }

  render() {
    return(
      <h1> Hello my new world </h1>
    )
  }
}

export default App
