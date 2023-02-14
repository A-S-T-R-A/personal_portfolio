import { classNames } from "modules/common/helpers/classNames"
import styles from "./BlurredDescription.module.css"

function BlurredDescription({ children, className }) {
    const combinedClassName = classNames(styles.paragraph, {}, [className])

    return (
        <div className={styles.container}>
            <p className={combinedClassName}>{children}</p>
        </div>
    )
}

export default BlurredDescription
