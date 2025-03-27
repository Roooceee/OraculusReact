import { BrowserRouter as Rooter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Apropos from "./pages/apropos";
import Contact from "./pages/contact";

function App() {
  return (
    <Rooter>

      <Routes>

        <Route path = "/" element={<Home/>} />
        <Route path="/a_propos" element= {<Apropos/>}/>
        <Route path="/contact" element= {<Contact/>}/>

      </Routes>

    </Rooter>
  )
}

export default App