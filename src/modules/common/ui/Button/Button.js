import React from "react"
import styles from "./Button.module.css"
import { classNames } from "modules/common/helpers/classNames"

import ButtonFront from "./components/ButtonFront/ButtonFront"

function Button({ children, isAlt, isForm, isDisabled }) {
    const containerClassName = classNames(styles.container, {
        [styles.alt]: isAlt,
        [styles.form]: isForm,
        [styles.disabled]: isDisabled,
    })

    return (
        <div className={containerClassName}>
            <ButtonFront isAlt={isAlt} isDisabled={isDisabled}>
                {children}
            </ButtonFront>
        </div>
    )
}

export default Button
