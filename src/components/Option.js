import React from 'react'

export default props => (

    <li
      onClick={ () => props.handleSelectOption( props.option )}
      className="option"
    >
        <img src={ props.option.data.album.image[0]['#text']}/>
        <p>
            { props.option.data.name } - { props.option.data.artist.name }
        </p>
      <button
        className="btn--flat option__remove"
        onClick={ () => props.handleDeleteOption( props.option ) }
  >
        X
      </button>
    </li>

)