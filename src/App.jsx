
import './App.css'
import Navbar from './componentes/Navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './page/Home'

function App() {
 return (
  <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
             
      </Routes>
    </BrowserRouter>
     <div>
      <span>soy el espan </span>

     
     </div>

  
  </>
   

  

  )
}

export default App
