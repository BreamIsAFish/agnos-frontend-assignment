import React from "react"
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import "./App.css"

import HandQuestionPage from "./pages/HandQuestionPage"
import StomachQuestionPage from "./pages/StomachQuestionPage"
import ThankYouPage from "./pages/ThankYouPage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/firstQuestion" element={<StomachQuestionPage />} />
          <Route path="/secondQuestion" element={<HandQuestionPage />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="/*" element={<Navigate to="/firstQuestion" />} />
        </Routes>
      </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  )
}

export default App
