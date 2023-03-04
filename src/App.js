import { About } from "modules/About"
import { useScrollTimeoutLoading } from "modules/common/helpers/useScrollTimeoutLoading"
import { Form } from "modules/Form"
import { Main } from "modules/Main"
import { Navigation } from "modules/Navigation"
import { Projects } from "modules/NProjects"
import { Technologies } from "modules/Technologies"
import { Suspense } from "react"
import { Footer } from "./modules/Footer"

function App() {
    const { ready } = useScrollTimeoutLoading(500)

    return (
        <Suspense fallback={<></>}>
            <div>
                <Navigation />
                <Main />
                {ready && (
                    <>
                        <About />
                        <Projects />
                        <Technologies />
                        <Form />
                        <Footer />
                    </>
                )}
            </div>
        </Suspense>
    )
}

export default App
