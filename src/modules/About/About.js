import { Section, SectionText, SectionTitle } from "modules/common/ui"
import { AboutList } from "./components/AboutList/AboutList"

export default function About() {
    return (
        <Section id="about">
            <SectionTitle withDescription>About</SectionTitle>
            <SectionText>
                I Know that Good Design means Good Business
            </SectionText>
            <AboutList />
        </Section>
    )
}
