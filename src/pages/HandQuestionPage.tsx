import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import HandCard from "../components/hand/HandCard"

const HandQuestionPage: React.FC = () => {
  const [selected, setSelected] = useState<boolean>(false)
  const navigate = useNavigate()

  const goNextQuestion = () => {
    // submit the result only if user answered the second question //
    if (selected) {
      navigate("/thankyou")
    }
  }

  return (
    <>
      <HandCard setSelected={setSelected} />
      <button
        className="button"
        style={{
          backgroundColor: selected ? "cornflowerblue" : "rgb(172, 172, 172)",
          color: selected ? "white" : "gray",
        }}
        onClick={goNextQuestion}
      >
        ยืนยัน
      </button>
    </>
  )
}

export default HandQuestionPage
