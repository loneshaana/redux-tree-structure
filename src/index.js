import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import "./styles.css";
import configureStore from "./configureStore";
import InitialState from "./InitialState";
import Node from "./Node";

const MyStore = configureStore(InitialState);

function App({ store }) {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <Node id={0} />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
const ConnectedApp = connect()(App);
ReactDOM.render(<ConnectedApp store={MyStore} />, rootElement);
