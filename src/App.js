import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css';
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
        {/* <Router>
          <Routes>
            <Route path="/" state={'Home'} element={<Home />} />
            <Route path="/about" state={'About'} element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetail />} />
            <Route path="/contact" element={<Form />} />

          </Routes>
        </Router> */}

        <Router />
      </MyContext.Provider>
    </div>
  );
}

export default App;
