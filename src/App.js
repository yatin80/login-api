// import 'bootstrap/dist/css/bootstrap.min.css';  
// import './App.css';
import './scss/custom.scss';
import './App.scss';
// import { Route, BrowserRouter as Router, RouterProvider, Routes } from 'react-router-dom';

import { MyContext } from './context';
import { useState } from 'react';
import Router from './routes/Router';



function App() {
  const [text, setText] = useState("Super");
  const handleClick = () => {
    setText("Netclues")
  }
  return (
    <div className="App h-100">
      <MyContext.Provider value={{ text, setText, handleClick }}>
       

        <Router />
      </MyContext.Provider>
    </div>
  );
}

export default App;
