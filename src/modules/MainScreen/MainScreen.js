import { useState, useEffect } from "react"
import { planet, satellite, Bsatellite } from "../../assets/images/other"
import { BsArrowRightCircle } from "react-icons/bs"
import styles from "./MainScreen.module.css"

export function MainScreen() {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState("")
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const [index, setIndex] = useState(1)
    const toRotate = ["Web Developer", "Content Creator", "Lorem Ipsum"]
    const period = 1000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setIndex(prevIndex => prevIndex - 1)
            setDelta(period)
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setIndex(1)
            setDelta(500)
        } else {
            setIndex(prevIndex => prevIndex + 1)
        }
    }

    return (
        <section className={styles.wrapper} id="home">
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.tagline}>Per aspera ad astra</span>
                    <h1 className={styles.greeting}>
                        Hi! My name is Artur <br /> I'm{" "}
                        <span className={styles.position}>{text}</span>
                    </h1>
                    <p className={styles.description}>
                        My name is Artur Pazyniuk. I'm a software engineer
                        specializing in building (ocasionally designing)
                        exceptional user experiences. Let's make something
                        special together.
                    </p>
                    <a className={styles.connect} href="/">
                        Let’s Connect <BsArrowRightCircle />
                    </a>
                </div>
                <div className={styles.imgContainer}>
                    <img
                        src={planet}
                        alt="planet Img"
                        className={styles.planet}
                    />
                    <img
                        src={satellite}
                        alt="satellite"
                        className={styles.satellite}
                    />
                    <img
                        src={Bsatellite}
                        alt="Big satellite"
                        className={styles.Bsatellite}
                    />
                </div>
            </div>
        </section>
    )
}
