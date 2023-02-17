import { classNames } from "modules/common/helpers/classNames"
import { ProjectsContext } from "modules/Projects/providers/ProjectsProvider"
import { useContext } from "react"
import styles from "./CategoriesFilter.module.css"

export function CategoriesFilter() {
    const { active, setActive, projectCategories } = useContext(ProjectsContext)

    return (
        <div className={styles.container}>
            {projectCategories.map(item => {
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
