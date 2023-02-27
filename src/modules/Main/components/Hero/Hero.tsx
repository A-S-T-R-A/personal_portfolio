import React from "react"
import { Button, ButtonVariant } from "modules/common/ui/Button"
import { Section } from "modules/common/ui/Section"
import { SectionText } from "modules/common/ui/SectionText"
import { SectionTitle } from "modules/common/ui/SectionTitle"
import styles from "./Hero.module.css"

function Hero() {
    function clickHandler() {
        document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <Section isRow isNopadding>
            <div className={styles.leftSection}>
                <SectionTitle isMain>
                    Welcome To <br />
                    My Personal Portfolio
                </SectionTitle>
                <SectionText>
                    My name is Artur Pazyniuk. I'm a software engineer
                    specializing in building (ocasionally designing) exceptional
                    user experiences.
                    <br /> Let's make something special together.
                </SectionText>
                <Button
                    onClick={clickHandler}
                    variant={ButtonVariant.FILLED}
                    isAlt
                >
                    Contact Me
                </Button>
            </div>
        </Section>
    )
}

export default Hero
