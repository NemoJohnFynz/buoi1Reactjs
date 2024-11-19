// import logo from './logo.svg';
import React from 'react';
import './App.css';

import { Hello, HelloNEMO, HelloPerson } from './components/Hello';
import { Header} from './components/Header';
import { Car } from './components/Car';
import { Login } from './components/Login';

function App() {
  return (
    <div>
      <Hello />
      <HelloPerson name= "Tsugikuni Nemo" />
      <Header />
      <HelloNEMO />
      <Car />
      < Login/>
    </div>

  );
}
// o	Route 1: Path: /, Element: <App/>
// o	Route 2: Path: /login, Element: <Login/>
// o	Route 3: Path: /hello, Element: <Hello/>
// o	Route 4: Path: /car, Element: <Car/>
// o	Route 5: Path: *, Element: Không tìm thấy trang web theo yêu cầu

export default App;
