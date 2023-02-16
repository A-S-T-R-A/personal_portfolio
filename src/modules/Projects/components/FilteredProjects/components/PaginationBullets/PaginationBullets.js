import { classNames } from "modules/common/helpers/classNames"
import styles from "./PaginationBullets.module.css"

export function PaginationBullets({
    currentPage,
    setCurrentPage,
    totalProjects,
    projectsPerPage,
}) {
    const pages = []

    for (let i = 0; i < Math.ceil(totalProjects / projectsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div className={styles.container}>
            {pages.map((item, index) => {
                const isActive = currentPage === index
                const className = classNames(styles.bullet, {
                    [styles.bulletActive]: isActive,
                })
                return (
                    <div
                        className={className}
                        key={index}
                        onClick={() => setCurrentPage(index)}
                    />
                )
            })}
        </div>
    )
}
