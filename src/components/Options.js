import React from 'react'
import Option from './Option'

export default props => (

    <section
      className="option-card"
    >

      <button
        className="option-card__remove-all btn--flat"
        disabled= { props.options.length == 0 }
        onClick={ props.handleDeleteAll }>
        Remove All
      </button>

      <ul
        className="option-card__list"
      >
        {
          props.options.length == 0 &&
            <p
              className="option-card__list__message"
            >
              Add a few songs and click them to see more!
            </p>
        }
        {
          props.options.map( option =>
            <Option
              key={ option.data.id }
              option={ option }
              handleDeleteOption={ props.handleDeleteOption }
              handleSelectOption={ props.handleSelectOption }
            />)
        }
      </ul>
    </section>

)