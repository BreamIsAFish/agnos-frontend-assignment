import React from "react"

const BaseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <>
      <button
        className="button-hand"
        style={{ top: "51%", right: "66%" }}
        onClick={onClick}
      />
      <button
        className="button-hand"
        style={{ top: "48%", right: "55%" }}
        onClick={onClick}
      />
      <button
        className="button-hand"
        style={{ top: "47%", right: "46%" }}
        onClick={onClick}
      />
      <button
        className="button-hand"
        style={{ top: "47%", right: "36%" }}
        onClick={onClick}
      />
      <button
        className="button-hand"
        style={{ top: "61%", right: "20%" }}
        onClick={onClick}
      />
    </>
  )
}

export default BaseButton
