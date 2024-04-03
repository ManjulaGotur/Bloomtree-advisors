
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

import {BrowserRouter, Routes,Route} from "react-router-dom"
import Firstpage from './components/Firstpage';
import Aboutus from './components/Aboutus';
import Ourteam from './components/Ourteam';
import Blogs from './components/Blogs';
import ContactUs from './components/ContactUs';
import Footersec from './components/Footersec';



function App() {
  return (
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
     
      <Route path='/' element={<Firstpage/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/ourteam' element={<Ourteam/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/contactus' element={<ContactUs/>} />
      
    </Routes>
  <Footersec/>
    </BrowserRouter>

  
  );
}

export default App;
