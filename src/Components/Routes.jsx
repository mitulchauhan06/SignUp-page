import { BrowserRouter , Routes , Route }  from 'react-router-dom'
import React from 'react'
import Login from './Login'
import Sign_up from './Sign_up' 
const AppRoutes = () => {
  return (
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Sign_up/>}/>
            <Route path="/Login" element={<Login/>}/>
       </Routes>
       </BrowserRouter>
  )
}
export default AppRoutes
