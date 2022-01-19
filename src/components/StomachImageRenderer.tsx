import React, { FC } from "react"

import { Section } from "./StomachCard"

import {
  BOTTOM_ST,
  BOTTOM_LEFT_ST,
  BOTTOM_RIGHT_ST,
  CENTER,
  DEFAULT_ST,
  TOP_LEFT_ST,
  TOP_RIGHT_ST,
  TOP_ST,
} from "../constants/images"

interface StomachImageRendererProp {
  selecting: Section
}

const StomachImageRenderer: FC<StomachImageRendererProp> = ({ selecting }) => {
  // Match status with the image in the assets folder
  const DICT: { [section in Section]: string } = {
    none: DEFAULT_ST, // Put this one just to prevent error (We didn't need it)
    center: CENTER,
    top: TOP_ST,
    "top-right": TOP_RIGHT_ST,
    "bottom-right": BOTTOM_RIGHT_ST,
    bottom: BOTTOM_ST,
    "bottom-left": BOTTOM_LEFT_ST,
    "top-left": TOP_LEFT_ST,
    all: "", // Put this one just to prevent error (We didn't need it)
  }

  if (selecting === "none" || !DICT[selecting]) {
    // Show default image when status is 'default' or status is invalid //
    return <img className="image-stomach" alt="default" src={DEFAULT_ST} />
  } else if (selecting === "all") {
    // Highlight all section when user select "ปวดทั้งท้อง"
    return (
      <>
        <img className="image-stomach" alt="default" src={DEFAULT_ST} />
        <img className="image-stomach" alt="center" src={DICT["center"]} />
        <img className="image-stomach" alt="top" src={DICT["top"]} />
        <img
          className="image-stomach"
          alt="top-right"
          src={DICT["top-right"]}
        />
        <img
          className="image-stomach"
          alt="bottom-right"
          src={DICT["bottom-right"]}
        />
        <img className="image-stomach" alt="bottom" src={DICT["bottom"]} />
        <img
          className="image-stomach"
          alt="bottom-left"
          src={DICT["bottom-left"]}
        />
        <img className="image-stomach" alt="top-left" src={DICT["top-left"]} />
      </>
    )
  } else {
    // Highlight the part according to the selecting section //
    return (
      <>
        <img className="image-stomach" alt="default" src={DEFAULT_ST} />
        <img className="image-stomach" alt="select" src={DICT[selecting]} />
      </>
    )
  }
}

export default StomachImageRenderer
