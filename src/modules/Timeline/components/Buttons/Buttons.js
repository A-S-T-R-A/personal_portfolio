import { classNames } from "modules/common/helpers/classNames"
import { timelineData } from "../../index"
import styles from "./Buttons.module.css"

function Buttons({ isActive }) {
    console.log(timelineData)
    const btnClassName = classNames(
        styles.btn,
        { [styles.btnActive]: isActive },
        []
    )

    const dotClassName = classNames(
        styles.dot,
        { [styles.dotActive]: isActive },
        []
    )
    return (
        <div className={styles.container}>
            {timelineData.map(item => (
                <button key={item.id} className={btnClassName}>
                    <div className={dotClassName} />
                </button>
            ))}
        </div>
    )
}

export default Buttons
