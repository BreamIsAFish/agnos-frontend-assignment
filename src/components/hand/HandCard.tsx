import React, { useState, useEffect, useCallback } from "react"

import HandImageRenderer from "./HandImageRenderer"
import HandButtons from "./HandButtons"

export type HandSection = "none" | "base" | "middle" | "tip" | "all"

interface HandCardProps {
  setSelected: (selected: boolean) => void
}

const HandCard: React.FC<HandCardProps> = ({ setSelected }) => {
  const [selecting, setSelecting] = useState<HandSection>("none") // Selecting section

  const updateSelect = useCallback(() => {
    if (selecting !== "none") setSelected(true)
    else setSelected(false)
  }, [selecting, setSelected])

  useEffect(() => {
    updateSelect()
  }, [updateSelect])

  return (
    <div className="card">
      <p className="title">จุดไหนที่คุณปวดนิ้วมากที่สุด ?</p>
      <HandImageRenderer selecting={selecting} />
      <HandButtons selecting={selecting} setSelecting={setSelecting} />
    </div>
  )
}

export default HandCard
