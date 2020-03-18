import React from 'react';
import DataForm from './components/DataForm';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from "./reducers/reducer";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import DataList from './components/DataList';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Data</h1>
        <DataForm />
        <DataList />
      </div>
    </Provider>
  );
}

export default App;
