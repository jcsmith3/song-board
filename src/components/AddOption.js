import React from 'react'
import { getSongData, getSongDetails } from '../functions/getSong'

class AddOptions extends React.Component {
    state = {
      error: undefined
    }

  handleSubmit = e => {

    e.preventDefault()

    const input = e.target.elements.optionInput
    const option = input.value.trim()

    const error = getSongData( option )
      .then( song => this.setState( () =>
        ({ song })))
      .then( () => getSongDetails( this.state.song )
      .then( data => this.props.handleAddOption( { data, tabs: this.state.song.tabsUrl})))
      .catch( err => console.log( err ))

    this.setState( () => ({ error: error.message }))
    input.value = ''
  }

  render() {
    return (
      <form
        className="option-form"
        onSubmit={ this.handleSubmit }>
        <label htmlFor="optionInput" />
        <input name="optionInput" />
        <button
          className="action-button action-button--small">
          Submit
        </button>
        { this.state.error && <p>{ this.state.error }</p>}
      </form>
    )
  }
}

export default AddOptions
