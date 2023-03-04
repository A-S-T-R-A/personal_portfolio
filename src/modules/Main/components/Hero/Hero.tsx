import React from "react"
import { Button, ButtonVariant } from "modules/common/ui/Button"
import { BsArrowRightCircle } from "react-icons/bs"
import styles from "./Hero.module.css"
import { TextFlicker } from "modules/common/ui/TextFlicker"

const flickerData = ["Web Developer", "UI/UX Designer", "Content Creator"]

function Hero() {
    function clickHandler() {
        document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className={styles.content}>
            <div className={styles.tagline}>Per aspera ad astra</div>
            <h1 className={styles.greeting}>
                Hi! My name is Artur
                <br />
                I'm <TextFlicker toRotate={flickerData} />
            </h1>
            <p className={styles.text}>
                My name is Artur Pazyniuk. I'm a software engineer specializing
                in building (ocasionally designing) exceptional user
                experiences.
                <br />
                Let's make something special together.
            </p>
            <Button
                onClick={clickHandler}
                variant={ButtonVariant.CLEAR}
                className={styles.connect}
            >
                Let’s Connect <BsArrowRightCircle className={styles.icon} />
            </Button>
        </div>
    )
}

export default Hero
