import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import './styles/App.css';
import { fetchPhones } from './actions';
import FetchButton from './containers/FetchButton';
import ShowPhoneModal from './containers/ShowPhoneModal';
import DisplayPhoneList from './containers/DisplayPhoneList';
import Spinner from './components/Spinner';
import ErrorBoundary from './components/ErrorBoundary';

const mapStateToProps = state => ({
  dataToFetch: state.dataToFetch,
  isFetching: state.isFetching,
  phones: state.phones,
  selectedPhone: state.selectedPhone,
  error: state.error
});

class App extends Component {
  static propTypes = {
    dataToFetch: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    phones: PropTypes.array.isRequired,
    selectedPhone: PropTypes.number,
    error: PropTypes.bool
  }

  componentDidUpdate(prevProps) {
    const { dispatch } = this.props;

    if (prevProps.dataToFetch !== this.props.dataToFetch && !this.props.error) {
      dispatch(fetchPhones());
    }

    if(prevProps.selectedPhone !== this.props.selectedPhone) {
      this.props.selectedPhone !== null
        ? document.body.style.overflow = "hidden"
        : document.body.style.overflow = "visible";
    }
  }

  render() {
    const { phones, selectedPhone, isFetching, error } = this.props;

    return (
      <div className="App">
        {isFetching &&
          <Spinner />
        }
        {phones.length === 0 && !error &&
          <FetchButton>Fetch Phones</FetchButton>
        }
        <ErrorBoundary>
          {phones.length !== 0 && 
            <DisplayPhoneList />
          }
        </ErrorBoundary>
        {selectedPhone !== null &&
          <ShowPhoneModal />
        }
        {error &&
          <FetchButton error={true}>Your request was interrupted. Click to try again.</FetchButton>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
