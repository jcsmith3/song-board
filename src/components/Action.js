import React from 'react'

export default props => (
  <div>
    <button
      className="action-button action-button--large"
      disabled={ props.hasOptions }
      onClick={ props.handleAction }>
      Random Song
    </button>
  </div>
)