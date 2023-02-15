import React from "react"
import styles from "./Button.module.css"
import { classNames } from "modules/common/helpers/classNames"

function Button({ children, className, isAlt, isForm, isDisabled }) {
    const containerClassName = classNames(
        styles.container,
        {
            [styles.alt]: isAlt,
            [styles.form]: isForm,
            [styles.disabled]: isDisabled,
        },
        [className]
    )

    return <div className={containerClassName}>{children}</div>
}

export default Button
