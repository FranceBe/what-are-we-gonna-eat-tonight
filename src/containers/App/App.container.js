import React from 'react'
import H1 from 'components/H1'

export class App extends React.PureComponent {
  // componentDidMount() {
  //   fetch('api/puppy')
  //     .then(res => res.json())
  //     .then(data => console.log(data.results))
  //     .catch(err => {
  //       throw Error(err)
  //     })
  // }

  render() {
    return(
      <H1> Hello my new world </H1>
    )
  }
}

export default App
