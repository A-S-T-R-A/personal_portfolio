import { classNames } from "modules/common/helpers/classNames"
import styles from "./AboutItem.module.css"

export function AboutItem({ data, className }) {
    const { img, title, desc } = data

    const containerClassName = classNames(styles.container, {}, [className])

    return (
        <div className={containerClassName}>
            <div
                className={styles.img}
                style={{ backgroundImage: `url(${img})` }}
            />
            <div className={styles.infoContainer}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>
    )
}
