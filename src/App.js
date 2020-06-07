import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import './styles/App.css';
import { fetchPhones } from './actions';
import FetchButton from './containers/FetchButton';
import ShowPhoneModal from './containers/ShowPhoneModal';
import DisplayPhoneList from './containers/DisplayPhoneList';
import Spinner from './components/Spinner';

const mapStateToProps = state => ({
  dataToFetch: state.dataToFetch,
  isFetching: state.isFetching,
  phones: state.phones,
  selectedPhone: state.selectedPhone,
});

class App extends Component {
  static propTypes = {
    dataToFetch: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    phones: PropTypes.array.isRequired,
    selectedPhone: PropTypes.number,
  }

  componentDidUpdate(prevProps) {
    const { dispatch } = this.props;

    if (prevProps.dataToFetch !== this.props.dataToFetch) {
      dispatch(fetchPhones());
    }

    if(prevProps.selectedPhone !== this.props.selectedPhone) {
      this.props.selectedPhone !== null
        ? document.body.style.overflow = "hidden"
        : document.body.style.overflow = "visible";
    }
  }

  render() {
    const { phones, selectedPhone, isFetching } = this.props;

    return (
      <div className="App">
        {isFetching &&
          <Spinner />
        }
        {phones.length === 0 && 
          <FetchButton>Fetch Phones</FetchButton>
        }
        {phones.length !== 0 && 
          <DisplayPhoneList />
        }
        {selectedPhone !== null &&
          <ShowPhoneModal />
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
