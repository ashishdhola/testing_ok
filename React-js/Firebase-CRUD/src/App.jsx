import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./pages/Header/Header"
import Demo from "./pages/Demo"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/" element={<Demo />} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/form/:id" element={<Form />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
