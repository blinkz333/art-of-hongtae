import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import GallaryPage from './view/gallary'

// Font
import './assets/common-css/fontgoogle.css'
// StyleSheet
import './assets/common-css/bootstrap.css'
import './assets/common-css/ionicons.css'
import './assets/common-css/fluidbox.min.css'
import './assets/port/styles.css'
import './assets/port/responsive.css'

ReactDOM.render(
  <React.StrictMode>
    <GallaryPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
