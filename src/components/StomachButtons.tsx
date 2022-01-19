import React, { FC } from "react"

import { Section } from "./StomachCard"

interface StomachButtonsProps {
  setSelecting: (section: Section) => void
}

const StomachButtons: FC<StomachButtonsProps> = ({ setSelecting }) => {
  // const selectSection = (section: number) => {
  //   // section 0 is center, 1 is top, 2 is top-right, 3 is bottom-right and so on.
  //   console.log("pressed! " + section.toString())

  // }

  return (
    <div>
      {/* Center Button */}
      <button
        className="button-stomach"
        style={{ top: "42vh", left: "48vw" }}
        onClick={() => setSelecting("center")}
        // onClick={() => selectSection(0)}
      />
      {/* Top Button  */}
      <button
        className="button-stomach"
        style={{ top: "35vh", left: "48vw" }}
        onClick={() => setSelecting("top")}
      />
      {/* Top-right Button */}
      <button
        className="button-stomach"
        style={{ top: "39vh", left: "51vw" }}
        onClick={() => setSelecting("top-right")}
      />
      {/* Bottom-right Button */}
      <button
        className="button-stomach"
        style={{ top: "46vh", left: "51vw" }}
        onClick={() => setSelecting("bottom-right")}
      />
      {/* Bottom Button */}
      <button
        className="button-stomach"
        style={{ top: "49vh", left: "48vw" }}
        onClick={() => setSelecting("bottom")}
      />
      {/* Bottom-left Button */}
      <button
        className="button-stomach"
        style={{ top: "46vh", left: "45vw" }}
        onClick={() => setSelecting("bottom-left")}
      />
      {/* Top-left Button */}
      <button
        className="button-stomach"
        style={{ top: "39vh", left: "45vw" }}
        onClick={() => setSelecting("top-left")}
      />
    </div>
  )
}

export default StomachButtons
