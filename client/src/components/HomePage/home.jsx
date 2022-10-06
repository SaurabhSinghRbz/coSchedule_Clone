
import Sidebar from "../Navbar/sidebar"
import { Notificationpanel } from "../notificationpanel/notificationpanel"
import { Taskpanel } from "../taskpanel/taskpanel"

export const Homepage =()=>{
return (
    <div style={{display : "flex",backgroundColor: "white"}}>
    <Sidebar />
    
    
    <Taskpanel />
    
   
    <Notificationpanel/>
   
    </div>
)
}