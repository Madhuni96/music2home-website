import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import store from './redux/store'
import Events from './pages/Events';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' exact/>
          <Route path='/sign-in' element={<SignIn />}/>
          <Route path='/event' element={<Events />}/>
        </Routes>
    </Router>
    </Provider>
  );
}

export default App;
