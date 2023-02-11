import { classNames } from "modules/common/helpers/classNames"
import styles from "./MobileScrollNode.module.css"

export function MobileScrollNode({ children, isFinal }) {
    const className = classNames(
        styles.container,
        { [styles.final]: isFinal },
        []
    )

    return <div className={className}>{children}</div>
}
