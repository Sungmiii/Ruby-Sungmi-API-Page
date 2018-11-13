import React from 'react'

import Translateform from './Translateform'
import TranslateWord from './TranslateWord'

import { getTranslation } from '../maori_api'
import Proverbs from './Proverbs'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      source: "",
      translation: ""
    }
    this.showTheProverbs = this.showTheProverbs.bind(this)
  }

  // Component Did Mount  - 
  componentDidMount() {
    console.log('App componentDidMount')
    getTranslation()
      .then((text) => {
        console.log('component getTranslation function', text.source)
        this.setState({
          source: text.source,
          translation: text.translation
        })
      })
  }

  // Needs to be called to show the proverb array/object
  showTheProverbs(evt) {
    evt.preventDefault()
    getProverb(this.state)
      .then(() => {
        this.setState({
          source: res.body.source,
          translation: res.body.translation
        })
      })
  }

  // Render
  render() {
    console.log('App rendered')
    return (
      <div>
        <h1>Ruby &amp; Sungmi Maori Translation Page</h1>
        <Translateform />
        <TranslateWord />
        <h2>Ruby &amp; Sungmi Proverb of the day</h2>
        {this.state.translation && <Proverbs showTheProverbs={this.showTheProverbs} translation={this.state.translation} source={this.state.source} />}
      </div>
    )
  }
}

export default App

