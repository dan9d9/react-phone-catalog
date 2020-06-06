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
  }

  render() {
    return (
      <div className="App">
        {this.props.phones.length === 0 && 
          <Button>Fetch Phones!</Button>
        }
        {this.props.phones.length !== 0 && 
          <DisplayPhoneList />
        }
        {this.props.selectedPhone !== null &&
          <ShowSelectedPhone id={this.props.selectedPhone}/>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
