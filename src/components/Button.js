import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import { fetchData } from '../actions';


const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(fetchData('phones'))
});

function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.children}
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

