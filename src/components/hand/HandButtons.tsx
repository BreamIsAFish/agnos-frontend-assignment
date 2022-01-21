import React from "react"

import { HandSection } from "./HandCard"
import BaseButton from "./BaseButton"
import MiddleButton from "./MiddleButton"
import TipButton from "./TipButton"

interface HandButtonsProps {
  selecting: HandSection
  setSelecting: (section: HandSection) => void
}

const HandButtons: React.FC<HandButtonsProps> = ({
  selecting,
  setSelecting,
}) => {
  const selectSection = (section: HandSection) => {
    if (selecting !== section) setSelecting(section)
    else setSelecting("none")
  }

  return (
    <div>
      <BaseButton onClick={() => selectSection("base")} />
      <MiddleButton onClick={() => selectSection("middle")} />
      <TipButton onClick={() => selectSection("tip")} />
      {/* "ปวดทั้งมือ" Button */}
      <button
        className="button-hand"
        style={{
          top: "93%",
          right: "10%",
          height: "5vh",
          width: "auto",
          aspectRatio: "8",
        }}
        onClick={() => selectSection("all")}
      />
    </div>
  )
}

export default HandButtons
