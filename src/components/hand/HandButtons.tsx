import React, { FC } from "react"

import { HandSection } from "./HandCard"
import BaseButton from "./BaseButton"

interface HandButtonsProps {
  selecting: HandSection
  setSelecting: (section: HandSection) => void
}

const HandButtons: FC<HandButtonsProps> = ({ selecting, setSelecting }) => {
  const selectSection = (section: HandSection) => {
    // console.log("pressed! " + section.toString())
    if (selecting !== section) setSelecting(section)
    else setSelecting("none")
  }

  return (
    <div>
      <BaseButton onClick={() => selectSection("base")} />
      {/* "ปวดทั้งมือ" Button */}
      <button
        className="button-stomach"
        style={{
          top: "65vh",
          right: "46vw",
          height: "5vh",
          width: "auto",
          aspectRatio: "19/6",
        }}
        onClick={() => selectSection("all")}
      />
    </div>
  )
}

export default HandButtons
