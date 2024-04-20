import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignIn= ()=>{

    const navigate = useNavigate();

    const [username,setUesrname] = useState("")
    const [password,setPassword] = useState("")

    return(<div ><div className="bg-slate-800 h-screen flex justify-center ">
    <div className=" flex flex-col justify-center">

        <div className="bg-white rounded-lg p-5 px-10 text-center">
            
    
            <Heading label="SignIn"></Heading>
            <SubHeading label="Enter your information to Login" ></SubHeading>
            <div className="py-3">
           <div className="py-2">
            <InputBox title="Email" onChange={(e)=>{  setUesrname(e.target.value)  }} inner="siuuuu@gmail.com"></InputBox>
            </div>
            <InputBox title="Password"   onChange={(e)=>{  setPassword(e.target.value)  }}  inner="xxxxx"></InputBox>
            <Button onClick={async()=>{  const res = await axios.post("http://localhost:3000/api/v1/user/signin", {

                username,
                password
            } 
            
            )   
            navigate('/dashboard') }}  label="Sign In"></Button>
            <BottomWarning label="Don't have a account?" buttonText="SignUp" to="/signup" ></BottomWarning>


            </div>



            
            
        </div>

    </div>
    
    </div>
    </div>)
    
    }