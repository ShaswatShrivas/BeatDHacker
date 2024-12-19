import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.tsx';
import Leaderboard from './pages/Leaderboard.tsx';
import Tips from './pages/Tips.tsx';
import About from './pages/About';
import CyberSecurityQuiz from './components/CyberSecurityQuiz';
import { AuthProvider } from './contexts/AuthContext';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz/:level" element={<CyberSecurityQuiz/>} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/tips" element={<Tips />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      </AuthProvider>
    </Provider>
  );
};

export default App;
