import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Header from './componnent/Header';
import View from './pages/View';
import Update from './pages/Update';
import Description from './pages/Description';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<View />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/Des/:id" element={<Description/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
