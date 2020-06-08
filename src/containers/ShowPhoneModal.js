import { connect } from 'react-redux';
import PhoneModal from '../components/PhoneModal';
import { selectPhone } from '../actions';

const getSelectedPhone = (phones, id) => {
  return phones.find(phone => phone.id === id); 
}

const mapStateToProps = state => ({
  phone: getSelectedPhone(state.phones, state.selectedPhone)
});

const mapDispatchToProps = dispatch => ({
  deselectPhone: (e) => {
    if(e.type === 'keydown' && e.keyCode !== 13) return;
    dispatch(selectPhone(null))
  }   
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneModal);