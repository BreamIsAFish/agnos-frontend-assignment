import React, { FC } from "react"

import { DEFAULT_ST } from "../constants/images"

interface StomachImageRendererProp {
  status: string
}

const StomachImageRenderer: FC<StomachImageRendererProp> = ({ status }) => {
  switch (status) {
    // case value:

    //   break;

    default:
      return <img src={DEFAULT_ST} width={500} />
  }
}

export default StomachImageRenderer
