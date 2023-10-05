import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Starter from './pages/Starter';
import Nav from './components/Nav';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Test from './pages/Test';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Starter />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/test' element={<Test />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

/* <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div> */

export default App;
