import { classNames } from "modules/common/helpers/classNames"
import styles from "./HeaderThree.module.css"

function HeaderThree({ children, isTitle }) {
    const className = classNames(styles.container, { [styles.title]: isTitle })

    return <h3 className={className}>{children}</h3>
}

export default HeaderThree
