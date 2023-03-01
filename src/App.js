import { About } from "modules/About"
import { Form } from "modules/Form"
import { Main } from "modules/Main"
import { Navigation } from "modules/Navigation"
import { Projects } from "modules/Projects"
import { Technologies } from "modules/Technologies"
import { Footer } from "./modules/Footer"
import { MainScreen } from "./modules/MainScreen"

function App() {
    return (
        <div>
            {/* <Navigation /> */}
            <div>
                <MainScreen />
                {/* <Main /> */}
                {/* <About />
                <Projects />
                <Technologies />
                <Form /> */}
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default App
