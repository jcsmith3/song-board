import React from 'react'
import ReactDom from 'react-dom'
import IndecisionApp from './app'
import './styles/styles.sass'

const appRoot = document.querySelector('#app')

ReactDom.render( (
  <IndecisionApp />
  ), appRoot )