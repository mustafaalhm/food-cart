import React from "react";
import ReactDOM from "react-dom";
import store from './store/store'
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import { BrowserRouter as Router } from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
      
    </Router>

  </React.StrictMode>,
  document.getElementById("root")
);
