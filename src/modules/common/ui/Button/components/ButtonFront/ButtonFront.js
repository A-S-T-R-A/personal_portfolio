import { classNames } from "modules/common/helpers/classNames"
import styles from "./ButtonFront.module.css"

function ButtonFront({ children, isAlt, isDisabled }) {
    const className = classNames(
        styles.button,
        { [styles.alt]: isAlt, [styles.disabled]: isDisabled },
        []
    )

    return <button className={className}>{children}</button>
}

export default ButtonFront
