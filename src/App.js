import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import './styles/App.css';
import { fetchPhones } from './actions';
import Button from './components/Button';
import ShowSelectedPhone from './containers/ShowSelectedPhone';
import DisplayPhoneList from './containers/DisplayPhoneList';

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
        {phones.length === 0 && 
          <Button>Fetch Phones!</Button>
        }
        {phones.length !== 0 && 
          <DisplayPhoneList />
        }
        {selectedPhone !== null &&
          <ShowSelectedPhone id={selectedPhone}/>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
