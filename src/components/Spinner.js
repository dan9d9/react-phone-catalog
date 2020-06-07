import React from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import '../styles/Spinner.css';


class Spinner extends React.Component {

   render() {
    return(
     <Loader
        className="spinner"
        type="Rings"
        // Color, height and width coordinated with fetch button styles
        // Position styling located in Button.css
        color="#88c2ae"
        height={150}
        width={150}
     />
    );
   }
}

export default Spinner;