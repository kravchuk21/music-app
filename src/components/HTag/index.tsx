import React from "react";
import styles from "./HTag.module.css";

interface HTag {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

export const HTag: React.FC<HTag> = ({ tag, children }) => {
  switch (tag) {
    case 'h1':
      return <h1 className={styles.HTag}>{children}</h1>
    case 'h2':
      return <h2 className={styles.HTag}>{children}</h2>
    case 'h3':
      return <h3 className={styles.HTag}>{children}</h3>
    case 'h4':
      return <h4 className={styles.HTag}>{children}</h4>
    case 'h5':
      return <h5 className={styles.HTag}>{children}</h5>
    case 'h6':
      return <h6 className={styles.HTag}>{children}</h6>
    default:
      return <h1 className={styles.HTag}>{children}</h1>
  }
}
