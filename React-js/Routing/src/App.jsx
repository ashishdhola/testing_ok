import Form from "./Pages/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowData from "./Pages/ShowData";
import UpdateForm from "./Pages/UpdateForm";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/ShowData" element={<ShowData />} />
          <Route path="/UpdateForm/:position" element={<UpdateForm />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
