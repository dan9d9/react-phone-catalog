import { connect } from 'react-redux';
import Button from '../components/Button';
import { fetchData } from '../actions';

const setClassNames = (isFetching) => {
  return isFetching
    ? 'fetch-button fetching'
    : 'fetch-button';
}

const mapStateToProps = state => ({
  classNames: setClassNames(state.isFetching)
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(fetchData('phones'))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);