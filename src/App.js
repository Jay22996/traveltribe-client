import { BrowserRouter,Routes,Route } from "react-router-dom";
import ContectUs from "./Components/ContectUs";
import Home from "./Components/Home";
import Packages from "./Components/Packages";
import AboutUs from "./Components/AboutUs";
import Traveldetail from "./Components/Tourdetail";
import Place from "./Components/Place";
import Login from "./Components/login";
import PlanTrip from "./Components/PlanTrip";
import Hotels from "./Components/Hotels";
import Activitis from "./Components/Activitis";
import Sing from "./Components/Sing";
import Cart from "./Components/Cart";


function App() {
  
  return (
    <>

     {/* <Navbar/> */}
     {/* <Videopart/> */}
     {/* <Tourcard/> */}
     {/* <ContectUs/> */}
     {/* <Footer/> */}
     {/* <AboutUs/> */}

     <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Packages" element={<Packages/>}/>
    <Route path="/About" element={<AboutUs/>}/>
    <Route path="/Contect" element={<ContectUs/>}/>
    <Route path="/Traveldetail" element={<Traveldetail/>}/>
    <Route path="/Packages" element={<Packages/>}/>
    <Route path="/Place" element={<Place/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Planpage" element={<PlanTrip/>}/>
    <Route path="/Hotel" element={<Hotels/>}/>
    <Route path="/Activitis" element={<Activitis/>}/>
    <Route path="/Transport" element={<Sing/>}/>
    <Route path="/Cart" element={<Cart/>}/>





    {/* <Route path="/Activits" element={<Activits/>}/>
    <Route path="/Hotels" element={<Hotels/>}/>
    <Route path="/Transfort" element={<Transfort/>}/>
    <Route path="/Card" element={<Card/>}/> */}








    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
