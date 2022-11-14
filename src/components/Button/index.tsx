import React from "react"
import styles from "./Button.module.css"

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<IButton> = ({ children, ...props }) => {
  return <button className={styles.Button} {...props}>{children}</button>
}
