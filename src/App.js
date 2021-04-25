import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent';
import {DISHES} from './data/dishes';
import Main from './Components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import {BrowserRouter} from 'react-router-dom';

const store = ConfigureStore();


class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
