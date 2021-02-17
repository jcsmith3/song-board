import React from 'react'
import ReactDom from 'react-dom'

const appRoot = document.getElementById('app')

class ToggleShow extends React.Component {

  constructor( props ) {
    super( props )
    this.toggleDetails = this.toggleDetails.bind( this )
    this.state = {
      hidden: true,
      details: 'Some secret info!'
    }
  }

  toggleDetails() {
    this.setState( state => ({ hidden: !state.hidden }))
  }

  render() {
    return (
      <main>
        <h1>Toggle Details</h1>
        <button onClick={ this.toggleDetails }>Show Details</button>
        { !this.state.hidden && <p>{ this.state.details }</p>}
      </main>
    )
  }
}

ReactDom.render(<ToggleShow />, appRoot)