import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {

  let [data, setData] = useState({});

  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  console.log(data);

  let handleSubmit = async (e) => {
    e.preventDefault();
    let userData = await fetch("http://localhost:3000/user", {
      method: "post",
      body: JSON.stringify(data)
    }).then((response) => {

      if (response) {
        console.log(response);
        toast.success("success");
        toast.warning("warning");
        toast("default");
        toast.info("info");
        toast.error("error");
        toast('displayed after 1 seconds', { delay: 1000 });
      }

    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <input type="text" name="firstname" placeholder="firstname" onChange={handleChange} />
        <input type="password" name="password" placeholder="password" onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
      <ToastContainer position="top-center" />

      {/* the available positions are:
      top-left
      top-right
      top-center
      bottom-left
      bottom-right
      bottom-center */}

      {/* The four available transitions are:
      bounce
      slide
      zoom
      flip */}
    </>
  )
}

export default App;
