import React from "react"
import { ButtonHTMLAttributes, FC } from "react"
// @ts-ignore
import { classNames } from "modules/common/helpers/classNames"

import styles from "./Button.module.css"

export enum ButtonTheme {
    CLEAR = "clear",
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = props => {
    const { className, children, theme, square, size, ...otherProps } = props

    /* const mods: Record<string, boolean> = {
        [styles[theme]]: true,
        [styles.square]: square,
    }
 */
    return (
        <button
            type="button"
            className={classNames(styles.Button, {}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
