import React from 'react';
import PropTypes from 'prop-types';


const PhoneShowAll = props => {
  console.log(props.imageFileName)
  return (
    <figure>
      <img src={require(`../images/${props.imageFileName}`)} alt={`${props.manufacturer} ${props.name}`}/>
      <figcaption>
        <div>
          <p>{props.manufacturer}</p>
          <p>{props.name}</p>
        </div>
        <p>{props.price}</p>
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

