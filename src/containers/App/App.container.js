import React from 'react'
import H1 from 'components/H1'
import SelectionButton from 'components/SelectionButton'

export class App extends React.PureComponent {
  // componentDidMount() {
  //   fetch('api/puppy')
  //     .then(res => res.json())
  //     .then(data => console.log(data.results))
  //     .catch(err => {
  //       throw Error(err)
  //     })
  // }

  constructor(props) {
    super(props)
    this.state = {
      selectedOption: '',
    }
  }

  handleSelectOption = option => {
    this.setState({ selectedOption: option })
  }
  render() {
    return(
      <>
        <H1> Qu&apos;est-ce qu&apos;on mange ce soir ? </H1>
        <SelectionButton
          firstOption={'Donnez moi des idées!'}
          secondOption={'J\'ai une envie de...'}
          onSelect={this.handleSelectOption}
          selectedOption={this.state.selectedOption}
        />
      </>
    )
  }
}

export default App
