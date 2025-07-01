import {BrowserRouter, Routes , Route} from "react-router-dom";

import Login from "./Components/Login";
import Sign_up from "./Components/Sign_up"
function App(){
  return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Sign_up />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    
 </BrowserRouter>
       
  );
}

export default App
