import React from 'react'
import ReactDom from 'react-dom'

const appRoot = document.querySelector('#app')

class Counter extends React.Component {
  constructor( props ) {
    super( props )
    this.handleAddOne = this.handleAddOne.bind( this )
    this.handleMinusOne = this.handleMinusOne.bind( this )
    this.handleReset = this.handleReset.bind( this )

    this.state = {
      count: props.count
    }
  }

  handleAddOne() {
    this.setState( state => ({ count: state.count + 1 }))
  }
  handleMinusOne() {
    this.setState( state => ({ count: state.count - 1 }))
  }
  handleReset() {
    this.setState( () => ({ count: 0 }))
  }

  render() {
    return (
      <div>
        <h1>Count: { this.state.count }</h1>
        <button onClick={ this.handleAddOne }>+1</button>
        <button onClick={ this.handleMinusOne }>-1</button>
        <button onClick={ this.handleReset }>Reset</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 0
}

ReactDom.render( <Counter count={5} />, appRoot )