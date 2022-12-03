import React, { useState,useRef } from "react";
import "../pages/login.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Start from "./Start";

function Home() {
    
        const email = useRef()
        const password = useRef()
        const getEmail = localStorage.getItem("emailData")
        const getPassword = localStorage.getItem("passwordData")
        const handleSubmit = () => {
            if (email.current.value === "DT@gmail.com" && password.current.value === "DT@123") {
                localStorage.setItem("emailData", "abc@gmail.com")
                localStorage.setItem("passwordData", "12345")
            }
        }
        return (
                    <div>
                        {getEmail && getPassword ?
                            <Start /> :
                            <div className=" cardss justify-content-center " >
                                <div className="innercards rounded">
                                    <form onSubmit={handleSubmit}>
                                        <h1 className="text-center pb-5">Login</h1>
                                        <div className="form-group">
                                            <input type="text" className="form-control inputss" placeholder="Your Email..." ref={email} />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control inputss" placeholder="Your Password..." ref={password} />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary buttonss" >Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        }
                    </div >
                );

        // const check=(navigate)=>{
        
        //     const storedName = localStorage.getItem('name');
        //     const storedPw = localStorage.getItem('pw');
        
        //     const userName = document.getElementById('userName');
        //     const userPw = document.getElementById('userPw');
            
        //     if(userName.value === storedName && userPw.value === storedPw){
        //         window.location.replace("http://localhost:3000/intrastate")
                // navigate('/intrastate', { replace: true });
                // return(
                    // useNavigate('/intrastate')
                    
                //     <ul className="nav justify-content-end">
                //     <li className="nav-item">
                //         <NavLink to="/intrastate" className="nav-link p-4 text-black">Intrastate</NavLink>
                //     </li>
                //     <li className="nav-item">
                //         <NavLink to="/interstate" className="nav-link p-4 text-black">Interstate</NavLink>
                //     </li>
                //     <li className="nav-item">
                //         <NavLink to="/international" className="nav-link p-4 text-black">International</NavLink>
                //     </li>
                //     <li className="nav-item">
                //         <NavLink to="/registration" className="nav-link p-4">Registration</NavLink>
                //     </li>
                //     <li>
                //         <button onClick={handleClick} style={{ padding: "24px", border: "none", background: "none", color: "red" }}>Logout</button>
                //     </li>
                // </ul>
                // 
                    // <IntraState />
                // alert('Login successfully');
                // window.location.replace("http://localhost:3000/intrastate")
                // )
               
            //    <IntraState />
        //     }else{
        //         alert('Error on login');
        //         window.location.replace("http://localhost:3000/intrastate");
        //     }
        // }
        // return (
        //     <div className=" cardss justify-content-center " >
        //         <div className="innercards rounded">
        //             <form onSubmit={check}>
        //                 <h1 className="text-center pb-5">Login</h1>
        //                 <div className="form-group">
        //                     <input type="email" className="form-control inputss" placeholder="Your email..." id="userName" required />
        //                 </div>
        //                 <div className="form-group">
        //                     <input type="password" className="form-control inputss" placeholder="Your Password..." id= "userPw" />
        //                 </div>
        //                 <div className="form-group">
        //                     <button type="submit" className="btn btn-primary buttonss" >SignIn</button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
            // <div>
            //     {getEmail && getPassword ?
            //         <IntraState /> :
            //         <div className=" cardss justify-content-center " >
            //             <div className="innercards rounded">
            //                 <form onSubmit={handleSubmit}>
            //                     <h1 className="text-center pb-5">Login</h1>
            //                     <div className="form-group">
            //                         <input type="email" className="form-control inputss" placeholder="Your Email..." ref={email} />
            //                     </div>
            //                     <div className="form-group">
            //                         <input type="password" className="form-control inputss" placeholder="Your Password..." ref={password} />
            //                     </div>
            //                     <div className="form-group">
            //                         <button type="submit" className="btn btn-primary buttonss" >Login</button>
            //                     </div>
            //                 </form>
            //             </div>
            //         </div>
            //     }
            // </div >
        // );
    }

// function Home() {

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const [loginstatus, setLoginstatus] = useState("");

//     let navigate = useNavigate();
//     const login = () => {
//         let loginurl = "http://localhost:4000/login";
//         axios.post(loginurl, {
//             username: username,
//             password: password,
//         }).then((response) => {
//             if(response.data.message){
//                 setLoginstatus(response.data.message);
//             }else{
//                 setLoginstatus(response.data[0].username);
//                 window.location.href("http://localhost:3000/intrastate")
//             }
//         })
//     }
//     navigate('/intrastate');

//     return (
//     {response.data[0].username ?
//         <IntraState/>
//         :
//         <div className=" cardss justify-content-center " >
//             <div className="innercards rounded">
//                 <form onSubmit={login}>
//                     <h1 className="text-center pb-5">Login</h1>
//                     <div className="form-group">
//                         <input type="text" className="form-control inputss" placeholder="Your Username..." name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
//                     </div>
//                     <div className="form-group">
//                         <input type="password" className="form-control inputss" placeholder="Your Password..." name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
//                     </div>
//                     <div className="form-group">
//                         <button type="submit" className="btn btn-primary buttonss" >Login</button>
//                     </div>
//                 </form>
//                 <h2>{loginstatus}</h2>
//             </div>
//         </div>
//     }
//     );
// }
export default Home;