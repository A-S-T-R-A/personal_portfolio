import React from "react"
import { ButtonHTMLAttributes, FC } from "react"
import { classNames } from "modules/common/helpers/classNames"

import styles from "./Button.module.css"

export enum ButtonVariant {
    CLEAR = "clear",
    OUTLINED = "outlined",
    FILLED = "filled",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant: ButtonVariant
    isAlt?: Boolean
}

export const Button: FC<ButtonProps> = props => {
    const {
        className,
        children,
        variant = ButtonVariant.FILLED,
        isAlt = false,
        ...otherProps
    } = props

    const btnClassName = classNames(styles.button, { [styles.alt]: isAlt }, [
        className,
        styles[variant],
    ])

    return (
        <button type="button" className={btnClassName} {...otherProps}>
            {children}
        </button>
    )
}
