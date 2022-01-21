import React from "react"

const MiddleButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <>
      <button
        className="button-hand"
        style={{ top: "43%", right: "70%" }}
        onClick={onClick}
      />
      <button
        className="button-hand"
        style={{ top: "37%", right: "60%" }}
        onClick={onClick}
      />
      <button
        className="button-hand"
        style={{ top: "34%", right: "48%" }}
        onClick={onClick}
      />
      <button
        className="button-hand"
        style={{ top: "35%", right: "35%" }}
        onClick={onClick}
      />
      <button
        className="button-hand"
        style={{ top: "51%", right: "12%" }}
        onClick={onClick}
      />
    </>
  )
}

export default MiddleButton
