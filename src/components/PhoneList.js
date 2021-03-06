import React from 'react';
import PropTypes from 'prop-types';
import PhoneShowAll from './PhoneShowAll';
import '../styles/PhoneList.css';

const PhoneList = props => {
  return (
    <ul className='phone-list'>
      {props.phones.map((ele, idx) => {
        return (
          <PhoneShowAll
            key={ele.id} 
            onClick={() => props.selectPhone(ele.id)} 
            onKeyDown={(e) => props.onEnter(e, ele.id)}
            {...ele}
          />
        );
      })}
    </ul>
  )
}

PhoneList.propTypes = {
  phones: PropTypes.array.isRequired
}

export default PhoneList;