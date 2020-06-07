import { connect } from 'react-redux';
import Button from '../components/Button';
import { fetchData, clearError } from '../actions';

const setClassNames = (isFetching, error) => {
  return error
    ? 'fetch-button error'
    : isFetching
      ? 'fetch-button fetching'
      : 'fetch-button';
}

const mapStateToProps = state => ({
  classNames: setClassNames(state.isFetching, state.error)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return ownProps.error
    ? {onClick: () => dispatch(clearError())}
    : {onClick: () => dispatch(fetchData('phones'))}
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);