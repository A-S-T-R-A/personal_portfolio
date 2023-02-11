import { Section } from "modules/common/ui/Section"
import { SectionDivider } from "modules/common/ui/SectionDivider"
import { SectionText } from "modules/common/ui/SectionText"
import { SectionTitle } from "modules/common/ui/SectionTitle"
import React from "react"
import { TechnologiesList } from "./components/TechnologiesList/TechnologiesList"

function Technologies() {
    return (
        <Section id="tech">
            <SectionDivider isDivider />
            <SectionTitle>Technologies</SectionTitle>
            <SectionText>
                I've worked with a range a technologies in the web development
                world. From Back-end To Design
            </SectionText>
            <TechnologiesList />
            <SectionDivider isColorAlt />
        </Section>
    )
}

export default Technologies
