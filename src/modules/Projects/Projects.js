import { Section, SectionDivider, SectionTitle } from "modules/common/ui"
import { CategoriesFilter } from "./components/CategoriesFilter/CategoriesFilter"
import { FilteredProjects } from "./components/FilteredProjects/FilteredProjects"
import { ProjectsProvider } from "./providers/ProjectsProvider"

export function Projects() {
    return (
        <ProjectsProvider>
            <Section id="projects">
                <SectionDivider />
                <SectionTitle isMain>Projects</SectionTitle>
                <CategoriesFilter />
                <FilteredProjects />
            </Section>
        </ProjectsProvider>
    )
}
