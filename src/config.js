export const URL = window.location.hostname === `localhost`
            ? 'http://localhost:3030' // use local server if on local
            : 'http://localhost:3030'; // use deployed IP address - This app will not be deployed, so using localhost in both