import { BrowserRouter as Rooter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <Rooter>

      <Routes>

        <Route path = "/" element={<Home/>} />

      </Routes>

    </Rooter>
  )
}

export default App