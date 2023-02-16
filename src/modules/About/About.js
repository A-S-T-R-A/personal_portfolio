import { Section, SectionTitle } from "modules/common/ui"
import { AboutList } from "./components/AboutList/AboutList"

export function About() {
    return (
        <Section>
            <SectionTitle>
                I Know that <span className="accent">Good Design</span> <br />
                means <span className="accent">Good Business</span>
            </SectionTitle>
            <AboutList />
        </Section>
    )
}
