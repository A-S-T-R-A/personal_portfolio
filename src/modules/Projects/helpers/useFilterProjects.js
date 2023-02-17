import { useEffect, useState } from "react"
import { getProjectCategories } from "./getProjectCategories"

export function useFilterProjects(projectsData) {
    const projectCategories = getProjectCategories(projectsData)

    const [active, setActive] = useState(projectCategories[0])
    const [filteredProjectsData, setFilteredProjectsData] =
        useState(projectsData)

    useEffect(() => {
        function filter(tag) {
            if (tag === "All") {
                setFilteredProjectsData(projectsData)
            } else {
                setFilteredProjectsData(
                    projectsData.filter(proj => proj.tags.includes(tag))
                )
            }
        }
        filter(active)
    }, [active, projectsData])

    return { active, setActive, filteredProjectsData, projectCategories }
}
