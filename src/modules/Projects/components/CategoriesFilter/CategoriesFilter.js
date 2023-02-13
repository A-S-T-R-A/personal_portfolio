import { classNames } from "modules/common/helpers/classNames"
import styles from "./CategoriesFilter.module.css"

export function CategoriesFilter({ data, active, setActive }) {
    return (
        <div className={styles.container}>
            {data.map(item => {
                const itemClassName = classNames(styles.item, {
                    [styles.active]: active === item,
                })
                return (
                    <div
                        key={item}
                        onClick={() => setActive(item)}
                        className={itemClassName}
                    >
                        {item}
                    </div>
                )
            })}
        </div>
    )
}
