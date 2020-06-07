import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import { fetchData } from '../actions';
import '../styles/Button.css';


const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(fetchData('phones'))
});

function Button(props) {
  return (
    <button className='fetch-button' onClick={props.onClick}>
      <span>{props.children}</span>
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default connect(
  null,
  mapDispatchToProps
)(Button);

