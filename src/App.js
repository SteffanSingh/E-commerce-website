import logo from './logo.svg';
import './App.css';
import Header from './header';
import Signup from "./Signup";
import {Routes,Route} from "react-router-dom";
import Login from "./Login"
import Shopping from './Shopping';
 import Cart from './Cart';
import Favourite from './Favourite';
 import Mens from './Mens';
import Details from './Details';
import Jewelery from './Jewelery';
import Women from './women';
import Electronics from './Electronics';
import All from './All';

function App() {
  return (
    

     <div className="App">
       <Header/>
         
     <Routes>
       
      <Route path='/Signup' element={<Signup/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/' element={<Shopping/>}/>
<Route path="/Details" element={<Details/> }/>        
<Route path='/Cart' element={<Cart/>} />
<Route path='/Favourite' element={<Favourite/>} />
<Route path="/All" element={<All/>}  />
<Route path="/Electronics" element={<Electronics/>}  />
<Route path="/Jewelery" element={<Jewelery/>}  />
<Route path="/Mens" element={<Mens/>}  />
<Route path="/Women" element={<Women/>}  />



      <Route />
      </Routes>
     
     
     </div>



  );
}

export default App;
