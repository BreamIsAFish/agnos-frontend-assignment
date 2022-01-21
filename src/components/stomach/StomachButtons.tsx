import React from "react"

import { Section } from "./StomachCard"

interface StomachButtonsProps {
  selecting: Section
  setSelecting: (section: Section) => void
}

const StomachButtons: React.FC<StomachButtonsProps> = ({
  selecting,
  setSelecting,
}) => {
  const selectSection = (section: Section) => {
    if (selecting !== section) setSelecting(section)
    else setSelecting("none")
  }

  return (
    <div>
      {/* Top Button  */}
      <button
        className="button-stomach"
        style={{ top: "48%", right: "46%" }}
        onClick={() => selectSection("top")}
      />
      {/* Top-right Button */}
      <button
        className="button-stomach"
        style={{ top: "54%", right: "36%" }}
        onClick={() => selectSection("top-right")}
      />
      {/* Bottom-right Button */}
      <button
        className="button-stomach"
        style={{ top: "63%", right: "36%" }}
        onClick={() => selectSection("bottom-right")}
      />
      {/* Bottom Button */}
      <button
        className="button-stomach"
        style={{ top: "67%", right: "46%" }}
        onClick={() => selectSection("bottom")}
      />
      {/* Bottom-left Button */}
      <button
        className="button-stomach"
        style={{ top: "63%", right: "56%" }}
        onClick={() => selectSection("bottom-left")}
      />
      {/* Top-left Button */}
      <button
        className="button-stomach"
        style={{ top: "54%", right: "56%" }}
        onClick={() => selectSection("top-left")}
      />
      {/* Center Button */}
      <button
        className="button-stomach"
        style={{ top: "58%", right: "46%" }}
        onClick={() => selectSection("center")}
      />
      {/* "ปวดทั้งท้อง" Button */}
      <button
        className="button-stomach"
        style={{
          top: "91%",
          right: "38%",
          height: "5vh",
          width: "auto",
          aspectRatio: "3",
        }}
        onClick={() => selectSection("all")}
      />
    </div>
  )
}

export default StomachButtons
