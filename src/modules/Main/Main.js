import styles from "./Main.module.css"
import { Section } from "modules/common/ui/Section"
import { BgAnimation } from "./components/BgAnimation"
import { Hero } from "./components/Hero"

function Main() {
    return (
        <Section id="home" isGrid className={styles.section}>
            <Hero />
            <BgAnimation />
        </Section>
    )
}

export default Main
