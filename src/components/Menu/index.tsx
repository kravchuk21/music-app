import React from "react"
import styles from "./Menu.module.css"

import MenuHomeIcon from "../../assets/icons/menu_home.svg"
import MenuSearchIcon from "../../assets/icons/menu_search.svg"
import MenuLibriaryIcon from "../../assets/icons/menu_libriary.svg"

import { IconButton } from "../IconButton"

export const Menu: React.FC = () => {
  return <div className={styles.Menu}>
    <IconButton src={MenuHomeIcon} />
    <IconButton src={MenuSearchIcon} />
    <IconButton src={MenuLibriaryIcon} />
  </div>
}
