import { About } from "modules/About"
import { Form } from "modules/Form"
import { Main } from "modules/Main"
import { Projects } from "modules/Projects"
import { Technologies } from "modules/Technologies"
import { Footer } from "./modules/Footer"
import { Header } from "./modules/Header"

function App() {
    return (
        <div className="App">
            <Header />
            <div>
                <Main />
                <About />
                <Projects />
                <Technologies />
                <Form />
            </div>
            {/* 
            <Footer /> */}
        </div>
    )
}

export default App
