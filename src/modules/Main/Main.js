import { useState, useEffect } from "react"
import styles from "./Main.module.css"
import { Hero } from "./components/Hero"
import { PlanetAnimation } from "./components/PlanetAnimation"

function Main() {
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        function handleResize() {
            setHeight(window.innerHeight)
        }

        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <main
            className={styles.wrapper}
            id="home"
            style={{ height: `${height}px` }}
        >
            <section className={styles.container}>
                <Hero />
                <PlanetAnimation />
            </section>
        </main>
    )
}

export default Main
