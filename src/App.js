import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StressPredictionForm from './StressLevel';
import './static/css/App.css';
import Header from './components/Header';
import Blog from './Pages/blog';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="app">
          <Routes>
            <Route path="/blog" element={<Blog />} />
            <Route path="/stressometer" element={<StressPredictionForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
