import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Br } from "react-router-dom";
import store from "./ducks/store";
import { Provider } from "react-redux";

ReactDOM.render(
//   <Provider store={store}>
    <Br>
      <App />
    </Br>
//   </Provider>
,
  document.getElementById("root")
);
// registerServiceWorker()
