import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PhoneModal.css';

class PhoneModal extends React.Component {
  constructor(props) {
    super(props);
    this.modal = React.createRef();
  }

  static propTypes = {
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

  componentDidMount() {
    this.modal.current.focus();  
  }

  render() {
    const { phone, deselectPhone } = this.props;

    return (
      <div className="phone-modal" 
        onClick={deselectPhone} 
        onKeyDown={(e) => deselectPhone(e)}
        tabIndex='0' ref={this.modal}
      >
        <figure>
          <h1>{`${phone.manufacturer} ${phone.name}`}</h1>
          <div>
            <img src={require(`../images/${phone.imageFileName}`)} alt={`${phone.manufacturer} ${phone.name}`}/>
          </div>
          <figcaption>
            <div>
              <p className='phone-modal_price'>&euro;{phone.price}</p>
              <p className='phone-modal_description'>{phone.description}</p>
            </div>
            <ul>
              <li><p>Color: {phone.color}</p></li>
              <li><p>Screen: {phone.screen}</p></li>
              <li><p>Processor: {phone.processor}</p></li>
              <li><p>Ram: {phone.ram}</p></li>
            </ul>
          </figcaption>
        </figure>
      </div>
    )
  }
}

export default PhoneModal;

