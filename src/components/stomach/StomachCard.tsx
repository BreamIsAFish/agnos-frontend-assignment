import React, { useState, useCallback, useEffect } from "react"
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

  const updateSelect = useCallback(() => {
    if (selecting !== "none") setSelected(true)
    else setSelected(false)
  }, [selecting, setSelected])

  useEffect(() => {
    updateSelect()
  }, [updateSelect])

  return (
    <div className="card">
      <p className="title">บริเวณไหนที่คุณปวดท้องมากที่สุด ?</p>
      <StomachImageRenderer selecting={selecting} />
      <StomachButtons selecting={selecting} setSelecting={setSelecting} />
    </div>
  )
}

export default StomachCard
