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
        // Color, height and width match with fetch button styles
        color="#88c2ae"
        height={150}
        width={150}
     />
    );
   }
}

export default Spinner;