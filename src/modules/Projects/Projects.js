import { useEffect, useState } from "react"
import { projectCategories, projectsData } from "./index"
import { Section, SectionDivider, SectionTitle } from "modules/common/ui"
import { CategoriesFilter } from "./components/CategoriesFilter/CategoriesFilter"
import { FilteredProjects } from "./components/FilteredProjects/FilteredProjects"

export function Projects() {
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

    return (
        <Section isNopadding id="projects">
            <SectionDivider />
            <SectionTitle isMain>Projects</SectionTitle>
            <CategoriesFilter
                data={projectCategories}
                active={active}
                setActive={setActive}
            />
            <FilteredProjects
                data={filteredProjectsData}
                filterActive={active}
            />
        </Section>
    )
}
