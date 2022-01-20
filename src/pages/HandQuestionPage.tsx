import React, { FC, useState } from "react"
import { useNavigate } from "react-router-dom"

import HandCard from "../components/HandCard"

const HandQuestionPage = () => {
  const [selected, setSelected] = useState<boolean>(false)
  const navigate = useNavigate()

  const goNextQuestion = () => {
    // navigate to next question only if user answered the first question //
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
