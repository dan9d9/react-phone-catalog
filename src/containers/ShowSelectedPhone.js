import { connect } from 'react-redux';
import PhoneShowOne from '../components/PhoneShowOne';
import { selectPhone } from '../actions';

const getSelectedPhone = (phones, id) => {
  return phones.find(phone => phone.id === id); 
}

const mapStateToProps = (state, ownProps) => ({
  phone: getSelectedPhone(state.phones, ownProps.id)
});

const mapDispatchToProps = dispatch => ({
  deselectPhone: () => dispatch(selectPhone(null))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneShowOne);