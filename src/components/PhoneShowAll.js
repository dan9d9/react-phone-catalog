import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PhoneShowAll.css';

const PhoneShowAll = props => {
  return (
    <li className="phone-list-item" onClick={props.onClick} tabIndex='0'>
      <figure>
        <div>
          <img src={require(`../images/${props.imageFileName}`)} alt={`${props.manufacturer} ${props.name}`}/>
        </div>
        <figcaption>
          <p>{props.manufacturer}</p>
          <p>{props.name}</p>
          <p><span>&euro;</span>{props.price}</p>
        </figcaption>
      </figure>
    </li>
  );
}

PhoneShowAll.propTypes = {
  id: PropTypes.number.isRequired,
  imageFileName: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default PhoneShowAll;

