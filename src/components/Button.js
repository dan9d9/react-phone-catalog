import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Button.css';


const Button = props => {
  return (
    <button className={props.classNames} onClick={props.onClick}>
      <span>{props.children}</span>
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Button;

