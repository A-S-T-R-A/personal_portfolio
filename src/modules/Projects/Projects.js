import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from "modules/common/ui"
import { CategoriesFilter } from "./components/CategoriesFilter/CategoriesFilter"
import { FilteredProjects } from "./components/FilteredProjects/FilteredProjects"
import { ProjectsProvider } from "./providers/ProjectsProvider"

export function Projects() {
    return (
        <ProjectsProvider>
            <Section id="projects">
                <SectionDivider isDivider />
                <SectionTitle>Projects</SectionTitle>
                <SectionText>
                    A selection of my range of work from simple Landing Pages to
                    complex Fullstack Web Applications
                </SectionText>
                <CategoriesFilter />
                <FilteredProjects />
            </Section>
        </ProjectsProvider>
    )
}
