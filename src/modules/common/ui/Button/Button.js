import React from "react"
import styles from "./Button.module.css"
import { classNames } from "modules/common/helpers/classNames"


function Button({
    children,
    className,
    isAlt,
    isForm,
    isDisabled,
    isOutlined,
    isText,
    ...props
}) {
    const containerClassName = classNames(
        styles.container,
        {
            [styles.alt]: isAlt,
            [styles.form]: isForm,
            [styles.disabled]: isDisabled,
            [styles.outlined]: isOutlined,
            [styles.text]: isText,
        },
        [className]
    )

    return (
        <div className={containerClassName} {...props}>
            {children}
            {isOutlined && <div className={styles.outlinedBg}>{children}</div>}
        </div>
    )
}

export default Button
