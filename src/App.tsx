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
    </div>
  )
}

export default App
