import { classNames } from "modules/common/helpers/classNames"
import styles from "./SectionDivider.module.css"

function SectionDivider({ isColorAlt, isDivider }) {
    const className = classNames(
        styles.container,
        { [styles.colorAlt]: isColorAlt, [styles.divider]: isDivider },
        []
    )

    return <div className={className} />
}

export default SectionDivider
