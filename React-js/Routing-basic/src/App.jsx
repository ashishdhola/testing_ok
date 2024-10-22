import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Pages/Header/Header"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
