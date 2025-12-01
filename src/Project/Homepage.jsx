import Firstsection1 from "./Firstsection";
import Popularcities from "./Popularcities";
   import Secondsection from "./Secondsection"
   import { Outlet } from "react-router-dom";
import Thousands from "./Thousands";
import Trust from "./Trust";
import Accommodation from "./Accommodation";
import AmberReferrel from "./AmberReferrel";
import BookYourPlan from "./BookYourPlan";
   function Homepage(){
    return(
        <div>
        
            {/* <Firstsection1/>
             <Secondsection/> */}
            <Outlet/> 
             <Popularcities/> 
            <Thousands/> 
            <Trust/>
            <Accommodation/>
            {/* <AmberReferrel/>
            <BookYourPlan/>  */}
       </div>
    )
   }
   export default Homepage;