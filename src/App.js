import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';


export class App extends Component {
  render() {
    return (
      <div className="app">
                <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<LandingPage />} />
                  </Routes>
                </BrowserRouter>
            </div>
    )
  }
}

export default App