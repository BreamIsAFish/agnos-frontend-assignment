import React from "react"

import { HandSection } from "./HandCard"

import {
  ALL_HN,
  BASE_HN,
  BASE_HN_LABEL,
  DEFAULT_HN,
  MIDDLE_HN,
  MIDDLE_HN_LABEL,
  TIP_HN,
  TIP_HN_LABEL,
} from "../../constants/images"

interface HandImageRendererProp {
  selecting: HandSection
}

const HandImageRenderer: React.FC<HandImageRendererProp> = ({ selecting }) => {
  // Match status with the image in the assets folder
  const IMG_DICT: { [section in HandSection]: string } = {
    none: DEFAULT_HN, // Put this one just to prevent error (We didn't need it)
    base: BASE_HN,
    middle: MIDDLE_HN,
    tip: TIP_HN,
    all: ALL_HN,
  }

  const LABEL_DICT: { [section in HandSection]: string } = {
    none: "",
    base: BASE_HN_LABEL,
    middle: MIDDLE_HN_LABEL,
    tip: TIP_HN_LABEL,
    all: "",
  }

  if (selecting === "none" || !IMG_DICT[selecting]) {
    // Show default image when status is 'default' or status is invalid //
    return <img className="image" alt="default" src={DEFAULT_HN} />
  } else if (selecting === "all") {
    // Highlight all section when user select "ปวดทั้งมือ"
    return (
      <>
        <img className="image" alt="default" src={DEFAULT_HN} />
        <img className="image" alt="base" src={IMG_DICT["base"]} />
        <img className="image" alt="middle" src={IMG_DICT["middle"]} />
        <img className="image" alt="tip" src={IMG_DICT["tip"]} />
        <img className="image" alt="top-left" src={IMG_DICT["all"]} />
      </>
    )
  } else {
    // Highlight the part according to the selecting section //
    return (
      <>
        <img className="image" alt="default" src={DEFAULT_HN} />
        <img className="image" alt="select" src={IMG_DICT[selecting]} />
        <img className="image" alt="select" src={LABEL_DICT[selecting]} />
      </>
    )
  }
}

export default HandImageRenderer
