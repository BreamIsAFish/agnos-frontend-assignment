import React, { FC } from "react"

interface HandCardProps {
  setSelected: (selected: boolean) => void
}

const HandCard: FC<HandCardProps> = ({ setSelected }) => {
  return <>This is a Card</>
}

export default HandCard
