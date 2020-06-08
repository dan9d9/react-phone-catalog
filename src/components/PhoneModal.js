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
    return (
      <div className="phone-modal" 
        onClick={this.props.deselectPhone} 
        onKeyDown={(e) => this.props.deselectPhone(e)}
        tabIndex='0' ref={this.modal}
      >
        <figure>
          <h1>{`${this.props.phone.manufacturer} ${this.props.phone.name}`}</h1>
          <div>
            <img src={require(`../images/${this.props.phone.imageFileName}`)} alt={`${this.props.phone.manufacturer} ${this.props.phone.name}`}/>
          </div>
          <figcaption>
            <div>
              <p className='phone-modal_price'>&euro;{this.props.phone.price}</p>
              <p className='phone-modal_description'>{this.props.phone.description}</p>
            </div>
            <ul>
              <li><p>Color: {this.props.phone.color}</p></li>
              <li><p>Screen: {this.props.phone.screen}</p></li>
              <li><p>Processor: {this.props.phone.processor}</p></li>
              <li><p>Ram: {this.props.phone.ram}</p></li>
            </ul>
          </figcaption>
        </figure>
      </div>
    )
  }
}

export default PhoneModal;

