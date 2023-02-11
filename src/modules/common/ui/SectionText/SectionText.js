import React from "react"
import styles from "./SectionText.module.css"

function SectionText({ children }) {
    return <p className={styles.text}>{children}</p>
}

export default SectionText
