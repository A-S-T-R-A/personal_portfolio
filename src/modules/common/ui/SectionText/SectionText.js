import { classNames } from "modules/common/helpers/classNames"
import React from "react"
import styles from "./SectionText.module.css"

function SectionText({ children, className }) {
    const textClassName = classNames(styles.text, {}, [className])

    return <p className={textClassName}>{children}</p>
}

export default SectionText
