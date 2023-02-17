import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from "modules/common/ui"
import { TechnologiesList } from "./components/TechnologiesList/TechnologiesList"
import { Timeline } from "./components/Timeline/Timeline"
import styles from "./Technologies.module.css"

function Technologies() {
    return (
        <Section id="technologies">
            <SectionDivider isDivider />
            <SectionTitle>Technologies</SectionTitle>
            <SectionText>
                I've worked with a range a technologies in the web development
                world. From Back-end To Design
            </SectionText>
            <div className={styles.content}>
                <TechnologiesList />
                <Timeline />
            </div>
            <SectionDivider isColorAlt />
        </Section>
    )
}

export default Technologies
