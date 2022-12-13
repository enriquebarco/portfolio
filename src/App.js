import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CollaborationPrompt from './pages/CollaborationPrompt/CollaborationPrompt';
import FormPage from './pages/FormPage/FormPage';
import LandingPage from './pages/LandingPage/LandingPage';


export class App extends Component {
  render() {
    return (
      <div className="app">
                <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/contact" element={<FormPage />} />
                        <Route path='/dalle' element={<CollaborationPrompt />} />
                  </Routes>
                </BrowserRouter>
            </div>
    )
  }
}

export default App