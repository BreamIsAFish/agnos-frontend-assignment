import React, { FC } from "react"

import StomachCard from "../components/StomachCard"

const StomachQuestionPage: FC = () => {
  return (
    <>
      {/* <div style={{ textAlign: "center" }}> */}
      <StomachCard />
      <button
        className="button"
        onClick={() => {
          console.log("eiei")
        }}
      >
        ต่อไป
      </button>
      {/* </div> */}
    </>
  )
}

export default StomachQuestionPage
