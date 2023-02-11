import { Section } from "modules/common/ui/Section"
import { SectionDivider } from "modules/common/ui/SectionDivider"
import { SectionTitle } from "modules/common/ui/SectionTitle"
import GridContainer from "./components/GridContainer/GridContainer"

function Projects() {
    return (
        <Section isNopadding id="projects">
            <SectionDivider />
            <SectionTitle isMain>Projects</SectionTitle>
            <GridContainer />
        </Section>
    )
}

export default Projects
