import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { User } from "../components/User"
import { useEffect, useState } from "react"
import axios from "axios"



export const Dashboard = ()=>{
   
     
   const [bal,setBal] = useState(0)


return<div className=" h-screen bg-gradient-to-r from-white to-blue-50">
   <AppBar/>
   <div className="m-8"> 
   <Balance value ="3569" ></Balance>
   <User></User>
   </div>
</div>

}
// const [Bal,setBal] = useState(0)

// useEffect(()=>{ 
//   axios.get("http://localhost:3000/api/v1/account/balance")
//   .then(response=>{
//       setBal(response.data.Balance)

//   })
  
// },[])