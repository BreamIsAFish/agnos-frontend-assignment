import React, { FC, useState, useEffect } from "react"
import StomachButtons from "./StomachButtons"

import StomachImageRenderer from "./StomachImageRenderer"

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

  useEffect(() => {
    console.log(selecting)
  }, [selecting])

  return (
    <div className="card">
      <p className="title">คุณรู้สึกปวดท้องบริเวณใดมากที่สุด ?</p>
      <StomachImageRenderer selecting={selecting} />
      <StomachButtons selecting={selecting} setSelecting={setSelecting} />
    </div>
  )
}

export default StomachCard
