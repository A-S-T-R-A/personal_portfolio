import { useEffect, useState } from "react"
import { PaginationBullets } from "./components/PaginationBullets/PaginationBullets"
import { PaginationProjects } from "./components/PaginationProjects/PaginationProjects"
import styles from "./FilteredProjects.module.css"

export function FilteredProjects({ data, filterActive }) {
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        setCurrentPage(0)
    }, [filterActive])

    const projectsPerPage = 3

    const indexOfFirst = currentPage * projectsPerPage
    const indexOfLast = indexOfFirst + projectsPerPage
    const paginatedProjects = data.slice(indexOfFirst, indexOfLast)

    return (
        <div className={styles.container}>
            <PaginationProjects projects={paginatedProjects} />
            <PaginationBullets
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalProjects={data.length}
                projectsPerPage={projectsPerPage}
            />
        </div>
    )
}
