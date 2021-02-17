import React from 'react'

export default props => (

    <li
      className="option"
    >
    <img src={ props.option.data.album.image[0]['#text']}/>
    <span
      onClick={ () => props.handleSelectOption( props.option )}
    >
        <p>
            { props.option.data.name } - { props.option.data.artist.name }
        </p>

    </span>
      <button
        className="btn--flat option__remove"
        onClick={ () => props.handleDeleteOption( props.option ) }
  >
        X
      </button>
    </li>

)