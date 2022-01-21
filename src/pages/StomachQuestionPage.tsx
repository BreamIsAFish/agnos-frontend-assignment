import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import StomachCard from "../components/stomach/StomachCard"

const StomachQuestionPage: React.FC = () => {
  const [selected, setSelected] = useState<boolean>(false)
  const navigate = useNavigate()

  const goNextQuestion = () => {
    // navigate to next question only if user answered the first question //
    if (selected) {
      navigate("/secondQuestion")
    }
  }

  return (
    <>
      <StomachCard setSelected={setSelected} />
      <button
        className="button"
        style={{
          backgroundColor: selected ? "cornflowerblue" : "rgb(172, 172, 172)",
          color: selected ? "white" : "gray",
        }}
        onClick={goNextQuestion}
      >
        ต่อไป
      </button>
    </>
  )
}

export default StomachQuestionPage
