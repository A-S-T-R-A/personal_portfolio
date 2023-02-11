import { Button } from "modules/common/ui/Button"
import { Section } from "modules/common/ui/Section"
import { SectionText } from "modules/common/ui/SectionText"
import { SectionTitle } from "modules/common/ui/SectionTitle"
import React from "react"

import styles from "./Hero.module.css"

function Hero({ handleClick }) {
    return (
        <Section isRow isNopadding>
            <div className={styles.leftSection}>
                <SectionTitle isMain>
                    Welcome To <br />
                    My Personal Portfolio
                </SectionTitle>
                <SectionText>
                    The purpose of JavaScript Mastery is to help aspiring and
                    established developers to take their development skills to
                    the next level and build awesome apps.
                </SectionText>
                <Button onClick={handleClick}>Learn More</Button>
            </div>
        </Section>
    )
}

export default Hero
