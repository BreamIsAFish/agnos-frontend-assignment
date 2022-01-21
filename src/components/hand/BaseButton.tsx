import React from "react"

const BaseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <>
      <button
        className="button-hand"
        style={{ top: "37vh", right: "53vw" }}
        onClick={onClick}
      />
      <button
        className="button-hand"
        style={{ top: "35vh", right: "51vw" }}
        onClick={onClick}
      />
      <button
        className="button-hand"
        style={{ top: "34vh", right: "49vw" }}
        onClick={onClick}
      />
      <button
        className="button-hand"
        style={{ top: "34vh", right: "46vw" }}
        onClick={onClick}
      />
      <button
        className="button-hand"
        style={{ top: "44vh", right: "43vw" }}
        onClick={onClick}
      />
    </>
  )
}

export default BaseButton
