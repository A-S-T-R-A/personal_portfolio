import { About } from "modules/About"
import { Form } from "modules/Form"
import { Main } from "modules/Main"
import { Navigation } from "modules/Navigation"
import { Projects } from "modules/Projects"
import { Technologies } from "modules/Technologies"
import { Footer } from "./modules/Footer"

function App() {
    return (
        <div className="App">
            <Navigation />
            <div>
                <Main />
                <About />
                <Projects />
                <Technologies />
                <Form />
            </div>
            <Footer />
        </div>
    )
}

export default App
