import React, { FC } from "react"

import StomachImageRenderer from "./StomachImageRenderer"

// import { DEFAULT_ST } from "../constants/images"

const StomachCard: FC = () => {
  return (
    <div className="card">
      <p className="title">คุณรู้สึกปวดบริเวณใดมากที่สุด ?</p>
      <StomachImageRenderer status={"default"} />
    </div>
  )
}

export default StomachCard
