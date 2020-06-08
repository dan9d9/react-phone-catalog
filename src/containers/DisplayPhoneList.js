import { connect } from 'react-redux';
import PhoneList from '../components/PhoneList';
import { selectPhone } from '../actions';


const mapStateToProps = state => ({
  phones: state.phones
});

const mapDispatchToProps = dispatch => ({
  selectPhone: id => dispatch(selectPhone(id)),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneList);