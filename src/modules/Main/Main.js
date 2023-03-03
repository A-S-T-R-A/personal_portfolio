import { useState } from "react"
import styles from "./Main.module.css"
import { Hero } from "./components/Hero"
import { PlanetAnimation } from "./components/PlanetAnimation"

function Main() {
    const [height, setHeight] = useState(window.innerHeight)

    return (
        <main
            className={styles.wrapper}
            id="home"
            style={{ minHeight: `${height}px` }}
        >
            <section className={styles.container}>
                <Hero />
                <PlanetAnimation />
            </section>
        </main>
    )
}

export default Main
