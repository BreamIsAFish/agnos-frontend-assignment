import React, { FC } from "react"

import { Section } from "./StomachCard"

import {
  BOTTOM_ST,
  BOTTOM_LEFT_ST,
  BOTTOM_RIGHT_ST,
  CENTER_ST,
  DEFAULT_ST,
  TOP_LEFT_ST,
  TOP_RIGHT_ST,
  TOP_ST,
  ALL_ST,
  CENTER_ST_LABEL,
  TOP_ST_LABEL,
  TOP_RIGHT_ST_LABEL,
  BOTTOM_RIGHT_ST_LABEL,
  BOTTOM_ST_LABEL,
  BOTTOM_LEFT_ST_LABEL,
  TOP_LEFT_ST_LABEL,
} from "../../constants/images"

interface StomachImageRendererProp {
  selecting: Section
}

const StomachImageRenderer: FC<StomachImageRendererProp> = ({ selecting }) => {
  // Match status with the image in the assets folder
  const IMG_DICT: { [section in Section]: string } = {
    none: DEFAULT_ST, // Put this one just to prevent error (We didn't need it)
    center: CENTER_ST,
    top: TOP_ST,
    "top-right": TOP_RIGHT_ST,
    "bottom-right": BOTTOM_RIGHT_ST,
    bottom: BOTTOM_ST,
    "bottom-left": BOTTOM_LEFT_ST,
    "top-left": TOP_LEFT_ST,
    all: ALL_ST,
  }

  const LABEL_DICT: { [section in Section]: string } = {
    none: "", // Put this one just to prevent error (We didn't need it)
    center: CENTER_ST_LABEL,
    top: TOP_ST_LABEL,
    "top-right": TOP_RIGHT_ST_LABEL,
    "bottom-right": BOTTOM_RIGHT_ST_LABEL,
    bottom: BOTTOM_ST_LABEL,
    "bottom-left": BOTTOM_LEFT_ST_LABEL,
    "top-left": TOP_LEFT_ST_LABEL,
    all: "", // Put this one just to prevent error (We didn't need it)
  }

  if (selecting === "none" || !IMG_DICT[selecting]) {
    // Show default image when status is 'default' or status is invalid //
    return <img className="image-stomach" alt="default" src={DEFAULT_ST} />
  } else if (selecting === "all") {
    // Highlight all section when user select "ปวดทั้งท้อง"
    return (
      <>
        <img className="image-stomach" alt="default" src={DEFAULT_ST} />
        <img className="image-stomach" alt="center" src={IMG_DICT["center"]} />
        <img className="image-stomach" alt="top" src={IMG_DICT["top"]} />
        <img
          className="image-stomach"
          alt="top-right"
          src={IMG_DICT["top-right"]}
        />
        <img
          className="image-stomach"
          alt="bottom-right"
          src={IMG_DICT["bottom-right"]}
        />
        <img className="image-stomach" alt="bottom" src={IMG_DICT["bottom"]} />
        <img
          className="image-stomach"
          alt="bottom-left"
          src={IMG_DICT["bottom-left"]}
        />
        <img
          className="image-stomach"
          alt="top-left"
          src={IMG_DICT["top-left"]}
        />
        <img className="image-stomach" alt="top-left" src={IMG_DICT["all"]} />
      </>
    )
  } else {
    // Highlight the part according to the selecting section //
    return (
      <>
        <img className="image-stomach" alt="default" src={DEFAULT_ST} />
        <img className="image-stomach" alt="select" src={IMG_DICT[selecting]} />
        <img
          className="image-stomach"
          alt="select"
          src={LABEL_DICT[selecting]}
        />
      </>
    )
  }
}

export default StomachImageRenderer
