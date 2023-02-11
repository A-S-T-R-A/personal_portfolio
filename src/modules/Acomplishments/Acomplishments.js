import { Section } from "modules/common/ui/Section"
import { SectionTitle } from "modules/common/ui/SectionTitle"
import styles from "./Acomplishments.module.css"
import BoxesList from "./components/BoxesList/BoxesList"

export function Acomplishments() {
    return (
        <Section>
            <SectionTitle>Personal Achievements</SectionTitle>
            <BoxesList />
        </Section>
    )
}
