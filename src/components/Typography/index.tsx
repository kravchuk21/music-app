import React from "react";
import styles from "./Typography.module.css";

interface Typography {
  children: React.ReactNode;
}

export const Typography: React.FC<Typography> = ({ children }) => {
  return <p className={styles.typography}>{children}</p>
}
