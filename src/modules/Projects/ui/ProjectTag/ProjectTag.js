import { classNames } from "modules/common/helpers/classNames"
import styles from "./ProjectTag.module.css"

export function ProjectTag({ children, onClick, isActive, className }) {
    const tagClassName = classNames(
        styles.tag,
        {
            [styles.active]: isActive,
        },
        [className]
    )
    return (
        <div onClick={onClick} className={tagClassName}>
            {children}
        </div>
    )
}
