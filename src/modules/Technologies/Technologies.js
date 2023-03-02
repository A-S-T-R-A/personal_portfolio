import { Section, SectionText, SectionTitle } from "modules/common/ui"
import { TechnologiesList } from "./components/TechnologiesList/TechnologiesList"
import { Timeline } from "./components/Timeline/Timeline"
import styles from "./Technologies.module.css"

function Technologies() {
    return (
        <Section id="technologies">
            <SectionTitle>Technologies</SectionTitle>
            <SectionText>
                I've worked with a range of technologies in the web development
                world. From Frontend to Backend and design.
            </SectionText>
            <div className={styles.content}>
                <TechnologiesList />
                <Timeline />
            </div>
        </Section>
    )
}

export default Technologies
