import { Section, SectionTitle } from "modules/common/ui"
import { AboutList } from "./components/AboutList/AboutList"

export function About() {
    return (
        <Section id="about">
            <SectionTitle>
                I Know that <span>Good Design</span> <br />
                means <span>Good Business</span>
            </SectionTitle>
            <AboutList />
        </Section>
    )
}
