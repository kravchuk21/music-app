import React from "react"
import { Button, IButton } from "../Button"

interface IconButton extends Omit<IButton, 'children'> {
  src: string
}

export const IconButton: React.FC<IconButton> = ({ src }) => {
  return <Button>
    <img src={src} />
  </Button>
}
