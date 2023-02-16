import { Section, SectionTitle } from "modules/common/ui"
import { AboutList } from "./components/AboutList/AboutList"
import styles from "./About.module.css"

export function About() {
    return (
        <Section>
            <SectionTitle className={styles.title}>
                I Know that <span className="accent">Good Design</span> <br />
                means <span className="accent">Good Business</span>
            </SectionTitle>
            <AboutList />
        </Section>
    )
}
