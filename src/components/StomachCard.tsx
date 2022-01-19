import React, { FC, useState } from "react"
import StomachButtons from "./StomachButtons"

import StomachImageRenderer from "./StomachImageRenderer"

// import { DEFAULT_ST } from "../constants/images"
export type Section =
  | "none"
  | "center"
  | "top"
  | "top-right"
  | "bottom-right"
  | "bottom"
  | "bottom-left"
  | "top-left"
  | "all"

const StomachCard: FC = () => {
  const [selecting, setSelecting] = useState<Section>("none") // Selecting section

  return (
    <div className="card">
      <p className="title">คุณรู้สึกปวดท้องบริเวณใดมากที่สุด ?</p>
      <StomachImageRenderer status={"default"} />
      <StomachButtons setSelecting={setSelecting} />
    </div>
  )
}

export default StomachCard
