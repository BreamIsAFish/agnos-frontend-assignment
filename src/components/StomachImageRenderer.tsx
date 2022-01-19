import React, { FC } from "react"

import { DEFAULT_ST, UP_ST } from "../constants/images"

interface StomachImageRendererProp {
  status: string
}

const StomachImageRenderer: FC<StomachImageRendererProp> = ({ status }) => {
  // Match status with the image in the assets folder
  const DICT: { [status: string]: string } = {
    highlight: DEFAULT_ST,
  }

  // Show default image when status is 'default' or status is invalid //
  if (status === "default" || !DICT[status]) {
    return (
      <img
        src={DEFAULT_ST}
        style={{ position: "absolute", height: "60vh", top: "13vh" }}
      />
    )
  } else {
    // Highlight the part according to the status //
    return (
      <>
        <img
          src={DICT[status]}
          style={{ position: "absolute", height: "60vh", top: "13vh" }}
        />
        <img
          src={UP_ST}
          style={{ position: "absolute", height: "60vh", top: "13vh" }}
        />
      </>
    )
  }
}

export default StomachImageRenderer
