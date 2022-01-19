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
      {/* Center Button */}
      <button
        className="button-stomach"
        style={{ top: "42vh", left: "48vw" }}
        onClick={() => selectSection("center")}
      />
      {/* Top Button  */}
      <button
        className="button-stomach"
        style={{ top: "35vh", left: "48vw" }}
        onClick={() => selectSection("top")}
      />
      {/* Top-right Button */}
      <button
        className="button-stomach"
        style={{ top: "39vh", left: "51vw" }}
        onClick={() => selectSection("top-right")}
      />
      {/* Bottom-right Button */}
      <button
        className="button-stomach"
        style={{ top: "46vh", left: "51vw" }}
        onClick={() => selectSection("bottom-right")}
      />
      {/* Bottom Button */}
      <button
        className="button-stomach"
        style={{ top: "49vh", left: "48vw" }}
        onClick={() => selectSection("bottom")}
      />
      {/* Bottom-left Button */}
      <button
        className="button-stomach"
        style={{ top: "46vh", left: "45vw" }}
        onClick={() => selectSection("bottom-left")}
      />
      {/* Top-left Button */}
      <button
        className="button-stomach"
        style={{ top: "39vh", left: "45vw" }}
        onClick={() => selectSection("top-left")}
      />
    </div>
  )
}

export default StomachButtons
