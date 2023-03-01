import styles from "./Main.module.css"
import { Hero } from "./components/Hero"
import { PlanetAnimation } from "./components/PlanetAnimation"

function Main() {
    return (
        <main className={styles.wrapper} id="home">
            <section className={styles.container}>
                <Hero />
                <PlanetAnimation />
            </section>
        </main>
    )
}

export default Main
