import { Section } from "modules/common/ui/Section"
import React from "react"
import { BgAnimation } from "./components/BgAnimation"
import { Hero } from "./components/Hero"

function Main() {
    return (
        <Section isGrid>
            <Hero />
            {/* <BgAnimation /> */}
        </Section>
    )
}

export default Main
