import React from 'react';
import PropTypes from 'prop-types';

function PhoneShowOne(props) {
  return (
    <figure onClick={props.deselectPhone}>
      <h1>{`${props.phone.manufacturer} ${props.phone.name}`}</h1>
      <img src={require(`../images/${props.phone.imageFileName}`)} alt={`${props.phone.manufacturer} ${props.phone.name}`}/>
      <figcaption>
        <div>
          <p>{props.phone.description}</p>
          <p>{props.phone.price}</p>
        </div>
        <div>
          <p>{props.phone.color}</p>
          <p>{props.phone.screen}</p>
          <p>{props.phone.processor}</p>
          <p>{props.phone.ram}</p>
        </div>
      </figcaption>
    </figure>
  )
}

// PhoneShowOne.propTypes = {
//   imageFileName: PropTypes.string.isRequired,
//   manufacturer: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   description: PropTypes.string.isRequired,
//   color: PropTypes.string.isRequired,
//   screen: PropTypes.string.isRequired,
//   processor: PropTypes.string.isRequired,
//   ram: PropTypes.number.isRequired,
// }

export default PhoneShowOne

