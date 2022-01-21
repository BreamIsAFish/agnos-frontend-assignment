import React, { useState, useEffect } from "react"
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

interface StomachCardProps {
  setSelected: (selected: boolean) => void
}

const StomachCard: React.FC<StomachCardProps> = ({ setSelected }) => {
  const [selecting, setSelecting] = useState<Section>("none") // Selecting section

  useEffect(() => {
    if (selecting !== "none") setSelected(true)
    else setSelected(false)
  }, [selecting])

  return (
    <div className="card">
      <p className="title">บริเวณไหนที่คุณปวดท้องมากที่สุด ?</p>
      <StomachImageRenderer selecting={selecting} />
      <StomachButtons selecting={selecting} setSelecting={setSelecting} />
    </div>
  )
}

export default StomachCard
