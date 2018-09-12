import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import './App.css';
import Hello from './components/Hello';
import StatefulHello from './components/StatefulHello';
import ReduxHello from './containers/Hello';

import logo from './logo.svg';

const store = createStore<StoreState, any, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'Aseven',
});

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Hello name="Aseven" enthusiasmLevel={10}/>
          <StatefulHello name="Aseven" enthusiasmLevel={10}/>
          <ReduxHello />
        </div>
      </Provider>
    );
  }
}

export default App;
