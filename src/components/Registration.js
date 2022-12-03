import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import "../pages/login.css";
import axios from "axios";
import IntraState from '../pages/intrastate';
import { useNavigate } from "react-router-dom";

const handleClick = () => {
    // localStorage.clear();
    window.location.replace("http://localhost:3000/");
}
//  const navigate = useNavigate();
export default function Registration() {
    // const [usernameReg, setUsernameReg] = useState("");
    // const [passwordReg, setPasswordReg] = useState("");

    // const register = () => {
    //     let url = "http://localhost:4000/signup";
    //     axios.post(url,{
    //         username : usernameReg,
    //         password : passwordReg,
    //     }).then((response)=>{
    //         console.log(response.data)
    //    })
    // }
    // return (
    //     <div>
    //         <NavLink to="/intrastate">
    //             <button className='icons mt-4 ms-4'>  <BsFillArrowLeftCircleFill size={30} /></button>
    //         </NavLink>
    //         <div className=" cardss justify-content-center " >
    //             <div className="innercards rounded">
    //                 <form onSubmit={register}>
    //                     <h1 className="text-center pb-5">Register</h1>
    //                     <div className="form-group">
    //                         <input type="text" className="form-control inputss" placeholder="Your Username..." name='usernameReg' value={usernameReg} onChange={(e) => setUsernameReg(e.target.value)} />
    //                     </div>
    //                     <div className="form-group">
    //                         <input type="password" className="form-control inputss" placeholder="Your Password..." name='passwordReg' value={passwordReg} onChange={(e) => setPasswordReg(e.target.value)} />
    //                     </div>
    //                     <div className="form-group">
    //                         <button type="submit" className="btn btn-primary buttonss" >SignUp</button>
    //                     </div>
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    // )


    function store(){

        const name = document.getElementById('name');
        const pw = document.getElementById('pw');
        const lowerCaseLetters = /[a-z]/g;
        const upperCaseLetters = /[A-Z]/g;
        const numbers = /[0-9]/g;
    
        if(name.value.length === 0){
             alert('Please fill in email');
    
        }else if(pw.value.length === 0){
            alert('Please fill in password');
    
        }else if(name.value.length === 0 && pw.value.length === 0){
            alert('Please fill in email and password');
    
        }else if(pw.value.length > 8){
            alert('Max of 8');
    
        }else if(!pw.value.match(numbers)){
            alert('please add 1 number');
    
        }else if(!pw.value.match(upperCaseLetters)){
            alert('please add 1 uppercase letter');
    
        }else if(!pw.value.match(lowerCaseLetters)){
            alert('please add 1 lovercase letter');
    
        }else{
            localStorage.setItem('name', name.value);
            localStorage.setItem('pw', pw.value);
            alert('Your account has been created');
        }
    }
    function check(navigate){
        
        const storedName = localStorage.getItem('name');
        const storedPw = localStorage.getItem('pw');
    
        const userName = document.getElementById('userName');
        const userPw = document.getElementById('userPw');
        window.location.replace("http://localhost:3000/intrastate")
        if(userName.value === storedName && userPw.value === storedPw){
            navigate('/intrastate', { replace: true });
            // return(
                // useNavigate('/intrastate')
           
                // <IntraState />
            // alert('Login successfully');
            // window.location.replace("http://localhost:3000/intrastate")
            // )
           
        //    <IntraState />
        }else{
            alert('Error on login');
            window.location.replace("http://localhost:3000/intrastate");
        }
    }
    return (
        <div>
            <NavLink to="/intrastate">
                <button className='icons mt-4 ms-4'>  <BsFillArrowLeftCircleFill size={30} /></button>
            </NavLink>
            <div className=" cardss justify-content-center " >
                <div className="innercards rounded">
                    <form onSubmit={store}>
                        <h1 className="text-center pb-5">Register</h1>
                        <div className="form-group">
                            <input type="email" className="form-control inputss" placeholder="Your email..." id="name" required />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control inputss" placeholder="Your Password..." id= "pw" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary buttonss" >SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
            
            {/* <div className=" cardss justify-content-center " >
                <div className="innercards rounded">
                    <form onSubmit={check}>
                        <h1 className="text-center pb-5">Login</h1>
                        <div className="form-group">
                            <input type="email" className="form-control inputss" placeholder="Your email..." id="userName" required />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control inputss" placeholder="Your Password..." id= "userPw" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary buttonss" >SignIn</button>
                        </div>
                    </form>
                </div>
            </div> */}
        </div>
    )
}
