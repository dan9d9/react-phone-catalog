import React from 'react';
import PropTypes from 'prop-types';
import PhoneShowAll from './PhoneShowAll';
import '../styles/PhoneList.css';

const PhoneList = props => {
  return (
    <ul>
      {props.phones.map(ele => {
        return <li key={ele.id}>
                 <PhoneShowAll {...ele}/>
               </li>
      })}
    </ul>
  )
}

PhoneList.propTypes = {
  phones: PropTypes.array.isRequired
}

export default PhoneList;