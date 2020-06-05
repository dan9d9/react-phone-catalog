import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PhoneShowAll.css';

const PhoneShowAll = props => {
  return (
    <figure>
      <div>
        <img src={require(`../images/${props.imageFileName}`)} alt={`${props.manufacturer} ${props.name}`}/>
      </div>
      <figcaption>
        <div>
          <p>{props.manufacturer}</p>
          <p>{props.name}</p>
        </div>
        <p>&euro;{props.price}</p>
      </figcaption>
    </figure>
  );
}

PhoneShowAll.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default PhoneShowAll;

