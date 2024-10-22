import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./pages/Header/Header"
import AddBook from "./pages/AddBook/AddBook"

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/addBook" element={<AddBook/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
