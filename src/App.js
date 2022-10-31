import './App.css';
import Signup from './Signup';
import Forms from './Forms';
import Signup_report from './Signup_report';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';


function App() {
  const [number, setNumber]=useState('');
  const handlesubmit = (e) =>{
    e.preventDefault();
    console.log('submit')
  }
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path='/signup' element={< Signup/>}>
          </Route>
        </Routes>
      </BrowserRouter> */}
      {< Signup/>}
    </div>
  );
}

export default App;
