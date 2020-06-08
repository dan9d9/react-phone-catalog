import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PhoneModal.css';

const PhoneModal = props => {
  return (
    <div className="phone-modal" onClick={props.deselectPhone}>
      <figure>
        <h1>{`${props.phone.manufacturer} ${props.phone.name}`}</h1>
        <div>
          <img src={require(`../images/${props.phone.imageFileName}`)} alt={`${props.phone.manufacturer} ${props.phone.name}`}/>
        </div>
        <figcaption>
          <div>
            <p className='phone-modal_price'>&euro;{props.phone.price}</p>
            <p className='phone-modal_description'>{props.phone.description}</p>
          </div>
          <ul>
            <li><p>Color: {props.phone.color}</p></li>
            <li><p>Screen: {props.phone.screen}</p></li>
            <li><p>Processor: {props.phone.processor}</p></li>
            <li><p>Ram: {props.phone.ram}</p></li>
          </ul>
        </figcaption>
      </figure>
    </div>
  )
}

PhoneModal.propTypes = {
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

export default PhoneModal;

