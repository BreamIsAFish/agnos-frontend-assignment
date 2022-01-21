import React from "react"

const TipButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <>
      <button
        className="button-hand"
        style={{ top: "37%", right: "74%" }}
        onClick={onClick}
      />
      <button
        className="button-hand"
        style={{ top: "28%", right: "60%" }}
        onClick={onClick}
      />
      <button
        className="button-hand"
        style={{ top: "24%", right: "48%" }}
        onClick={onClick}
      />
      <button
        className="button-hand"
        style={{ top: "26%", right: "35%" }}
        onClick={onClick}
      />
    </>
  )
}

export default TipButton
