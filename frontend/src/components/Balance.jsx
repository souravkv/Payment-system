import { useEffect, useState } from "react"
import axios from "axios"



export const Balance= ({value})=>{
  



    return(<div className="flex text-lg">
        <div className=" font-thin  py-3 ">
            Balance :
        </div>
        <div className=" font-thin px-2 py-3">
            ${value}  
        </div>

    </div>)
} 