import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class AutoFocusInput extends Component {
  componentDidMount () {
    this.input.focus()
  }

  render () {
    return (
      <input ref={(input) => this.input = input}/>
    )
  }
}

ReactDOM.render(
  <AutoFocusInput />,
  document.getElementById('root')
)


