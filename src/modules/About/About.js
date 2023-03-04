import { Section, SectionText, SectionTitle } from "modules/common/ui"
import { AboutList } from "./components/AboutList/AboutList"
import styles from "./About.module.css"

export default function About() {
    return (
        <Section id="about" isWithPadding>
            <SectionTitle withDescription>About</SectionTitle>
            <SectionText className={styles.text}>
                I Know that Good Design means Good Business
            </SectionText>
            <AboutList />
        </Section>
    )
}
