import React from 'react'
import OptionModal from './components/Modal'
import Header from './components/Header'
import Action from './components/Action'
import Options from './components/Options'
import AddOptions from './components/AddOption'

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  getLocal = () => {
    const json = localStorage.getItem( 'options' )
    if ( !json ) return

    const data = JSON.parse( json )

    this.setState( () => ({ options: data }))

  }

  setLocal = () => {
    localStorage.setItem( 'options', JSON.stringify(this.state.options ))
  }

  handleDeleteAll = () => this.setState( () => ({ options: [] }))

  handleDeleteOption = option => {
    this.setState( state => {
      const options = state.options.filter( opt => opt !== option )
      return { options }
    })
  }

  handleAddOption = option => {
    if ( !option ) return { message: 'Please add a valid option...'}
    else if ( this.state.options.indexOf( option ) != -1 ) return { message: 'That option already exists...'}

    this.setState( state => ({ options: [ ...state.options, option ]}))
    return { message: undefined }

  }

  handleAction = () => {
    this.setState( () => ({ selectedOption: this.getRandomOption() }))
  }

  handleSelectOption = option => {
    this.setState( () => ({ selectedOption: option }))
  }

  getRandomOption = () => {
    const random = Math.floor( Math.random() * this.state.options.length )
    console.log(this.state.options[random])
    return this.state.options[ random ]
  }

  closeOptionModal = () => this.setState( () => ({ selectedOption: undefined }))


  componentDidMount = () => this.getLocal()

  componentDidUpdate = () => this.setLocal()

  render = () => {

    const subTitle = "Save your favorite songs."

    return (
      <main>
        <Header
          subTitle={ subTitle }
        />

        <section className="container">
          <Action
            handleAction={ this.handleAction }
            hasOptions={ this.state.options.length == 0 }
          />

          <div className="option-container">
            <Options
              handleDeleteOption={ this.handleDeleteOption }
              handleDeleteAll={ this.handleDeleteAll }
              handleSelectOption={ this.handleSelectOption }
              options={ this.state.options }
            />

            <AddOptions
              handleAddOption={ this.handleAddOption }
            />
          </div>
        </section>

        <OptionModal
          close={ this.closeOptionModal }
          option={ this.state.selectedOption }
        />

      </main>
    )
  }
}

export default IndecisionApp