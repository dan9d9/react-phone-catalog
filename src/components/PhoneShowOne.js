import React from 'react';
import PropTypes from 'prop-types';

function PhoneShowOne(props) {
  return (
    <figure>
      <h1>`${props.manufacturer} ${props.name}`</h1>
      <img src={require(`../images/${props.imageFileName}`)} alt={`${props.manufacturer} ${props.name}`}/>
      <figcaption>
        <div>
          <p>{props.description}</p>
          <p>{props.price}</p>
        </div>
        <div>
          <p>{props.color}</p>
          <p>{props.screen}</p>
          <p>{props.processor}</p>
          <p>{props.ram}</p>
        </div>
      </figcaption>
    </figure>
  )
}

PhoneShowOne.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  screen: PropTypes.string.isRequired,
  processor: PropTypes.string.isRequired,
  ram: PropTypes.number.isRequired,
}

export default PhoneShowOne

