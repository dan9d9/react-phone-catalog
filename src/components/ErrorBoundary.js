import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {    
    return { hasError: true };  
  }

  componentDidCatch(error, errorInfo) {    
    console.log('error: ', error, 'info: ', errorInfo);  
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 style={{ textAlign: 'center' }}>Uh oh! An error ocurred with your request. Please refresh the page and try again.</h1>
      );   
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;