import React, { FC } from "react"

import { Section } from "./StomachCard"

interface StomachButtonsProps {
  selecting: Section
  setSelecting: (section: Section) => void
}

const StomachButtons: FC<StomachButtonsProps> = ({
  selecting,
  setSelecting,
}) => {
  const selectSection = (section: Section) => {
    // console.log("pressed! " + section.toString())
    if (selecting !== section) setSelecting(section)
    else setSelecting("none")
  }

  return (
    <div>
      {/* Top Button  */}
      <button
        className="button-stomach"
        style={{ top: "35vh", right: "49vw" }}
        onClick={() => selectSection("top")}
      />
      {/* Bottom-right Button */}
      <button
        className="button-stomach"
        style={{ top: "46vh", right: "46vw" }}
        onClick={() => selectSection("bottom-right")}
      />
      {/* Top-right Button */}
      <button
        className="button-stomach"
        style={{ top: "39vh", right: "46vw" }}
        onClick={() => selectSection("top-right")}
      />
      {/* Bottom Button */}
      <button
        className="button-stomach"
        style={{ top: "49vh", right: "49vw" }}
        onClick={() => selectSection("bottom")}
      />
      {/* Top-left Button */}
      <button
        className="button-stomach"
        style={{ top: "39vh", right: "52vw" }}
        onClick={() => selectSection("top-left")}
      />
      {/* Bottom-left Button */}
      <button
        className="button-stomach"
        style={{ top: "46vh", right: "52vw" }}
        onClick={() => selectSection("bottom-left")}
      />
      {/* Center Button */}
      <button
        className="button-stomach"
        style={{ top: "42vh", right: "49vw" }}
        onClick={() => selectSection("center")}
      />
      {/* "ปวดทั้งท้อง" Button */}
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

export default StomachButtons
