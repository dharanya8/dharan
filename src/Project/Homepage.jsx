import Firstsection1 from "./Firstsection";
import Popularcities from "./Popularcities";
   import Secondsection from "./Secondsection"
   import { Outlet } from "react-router-dom";
import Thousands from "./Thousands";
import Trust from "./Trust";
import Accommodation from "./Accommodation";
import AmberReferrel from "./AmberReferrel";
import BookYourPlan from "./BookYourPlan";
import Thebestpartner from "./Thebestpartner";
import Feature from "./Feature";
import Partnerwithus from "./Partnerwithus";
   function Homepage(){
    return(
        <div>
        
             <Firstsection1/>
             {/* <Secondsection/>  */}
             <Popularcities/> 
            <Thousands/> 
            {/* <Trust/> */}
            {/* <Accommodation/> */}
            {/* <AmberReferrel/>  */}
            {/* <BookYourPlan/> */}
            {/* <Thebestpartner/>  */}
            {/* <Partnerwithus/> */}
            {/* <Feature/> */}
       </div>
    )
   }
   export default Homepage;