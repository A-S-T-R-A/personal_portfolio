import { Acomplishments } from "modules/Acomplishments"
import { Main } from "modules/Main"
import { Projects } from "modules/NProjects"
import { Technologies } from "modules/Technologies"
import { Timeline } from "modules/Timeline"
import { Footer } from "./modules/Footer"
import { Header } from "./modules/Header"

function App() {
    return (
        <div className="App">
            <Header />
            <div>
                <Main />
                <Projects />
                <Technologies />
                <Timeline />
                <Acomplishments />
            </div>
            <Footer />
        </div>
    )
}

export default App
