import { useState, useEffect } from "react"
import { createContext } from "react"
import { projectsData } from "../index"
import { getProjectCategories } from "../helpers/getProjectCategories"

export const ProjectsContext = createContext()

export function ProjectsProvider({ children }) {
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
    }, [active])

    const value = { active, setActive, filteredProjectsData, projectCategories }

    return (
        <ProjectsContext.Provider value={value}>
            {children}
        </ProjectsContext.Provider>
    )
}
