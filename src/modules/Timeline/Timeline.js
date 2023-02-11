import { Section } from "modules/common/ui/Section"
import { SectionText } from "modules/common/ui/SectionText"
import { SectionTitle } from "modules/common/ui/SectionTitle"
import Buttons from "./components/Buttons/Buttons"
import { Carousel } from "./components/Carousel"

function Timeline() {
    return (
        <Section id="about">
            <SectionTitle>About Me</SectionTitle>
            <SectionText>
                The purpose of JavaScript Mastery is to help aspiring and
                established developers to take their development skills to the
                next level and build awesome apps.
            </SectionText>
            <Carousel />
            <Buttons />
        </Section>
    )
}

export default Timeline
