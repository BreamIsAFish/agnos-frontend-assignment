import React, { FC } from "react"

import { DEFAULT } from "../constants/images"

const StomachCard: FC = () => {
  return (
    <div className="card">
      <img src={DEFAULT} width={500} />
    </div>
  )
}

export default StomachCard
