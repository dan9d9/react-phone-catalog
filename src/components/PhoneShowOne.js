import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PhoneShowOne.css';

function PhoneShowOne(props) {
  return (
    <div className="phone-modal" onClick={props.deselectPhone}>
      <figure>
        <h1>{`${props.phone.manufacturer} ${props.phone.name}`}</h1>
        <div>
          <img src={require(`../images/${props.phone.imageFileName}`)} alt={`${props.phone.manufacturer} ${props.phone.name}`}/>
        </div>
        <figcaption>
          <div>
            <p>{props.phone.description}</p>
            <p>&euro;{props.phone.price}</p>
          </div>
          <div>
            <p>Color: {props.phone.color}</p>
            <p>Screen: {props.phone.screen}</p>
            <p>Processor: {props.phone.processor}</p>
            <p>Ram: {props.phone.ram}</p>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

PhoneShowOne.propTypes = {
  phone: PropTypes.shape({
    imageFileName: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    screen: PropTypes.string.isRequired,
    processor: PropTypes.string.isRequired,
    ram: PropTypes.number.isRequired,
  }).isRequired,
}

export default PhoneShowOne

