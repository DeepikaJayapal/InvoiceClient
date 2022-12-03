import React,{useState} from 'react';
import axios from 'axios';
import "./login.css";
import IntraState from './intrastate';
import Home from '../components/Home';

export default function Register() {
    
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const register = () => {
        let url = "http://localhost:4000/signup";
        axios.post(url,{
            username : usernameReg,
            password : passwordReg,
        }).then((response)=>{
            console.log(response.data)
       })
    }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginstatus, setLoginstatus] = useState("");

    const login = () => {
        let loginurl = "http://localhost:4000/login";
        axios.post(loginurl, {
            username: username,
            password: password,
        }).then((response) => {
            // console.log(response.data)
            if(response.data.message){
                setLoginstatus(response.data.message);
                <IntraState />
            }else{
                setLoginstatus(response.data[0].username);
                window.location.replace("http://localhost:3000/intrastate")
            }
        })
    }
    return (
        <div className='body'>
            <div className="container card-0 justify-content-center">
                <div className="card-body px-sm-4 px-0">
                    <div className="login-form">
                        <form>
                            <h2 className="text-center">SignUp</h2>
                            <div className="form-group has-error">
                                <input type="text" className="form-control" name="usernameReg" placeholder="username" required="required" value={usernameReg} onChange={(e) => setUsernameReg(e.target.value)}  />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="passwordReg" placeholder="password" required="required" value={passwordReg} onChange={(e) => setPasswordReg(e.target.value)}  />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={register}>SignUp</button>
                            </div>
                        </form>
                    </div>
                    <div className="login-form">
                        <form>
                            <h2 className="text-center">Login</h2>
                            <div className="form-group has-error">
                                <input type="text" className="form-control" name="username" placeholder="Username" required="required" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Password" required="required" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={login}>SignIn</button>
                            </div>
                            <h2>{loginstatus}</h2>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
    // if(usernameReg === username && passwordReg === password){
    //     return(
    //         <IntraState />
    //     )
    // }else{
    //     <Home />
    // }
    // function Home() {
    //     const email = useRef()
    //     const password = useRef()
    //     const getEmail = localStorage.getItem("emailData")
    //     const getPassword = localStorage.getItem("passwordData")
    //     const handleSubmit = () => {
    //         if (email.current.value === "abc@gmail.com" && password.current.value === "12345") {
    //             localStorage.setItem("emailData", "abc@gmail.com")
    //             localStorage.setItem("passwordData", "12345")
    //         }
    //     }
    
    //     return (
    //         <div>
    //             {getEmail && getPassword ?
    //                 <IntraState /> :
    //                 <div className=" cardss justify-content-center " >
    //                     <div className="innercards rounded">
    //                         <form onSubmit={handleSubmit}>
    //                             <h1 className="text-center pb-5">Login</h1>
    //                             <div className="form-group">
    //                                 <input type="text" className="form-control inputss" placeholder="Your Email..." ref={email} />
    //                             </div>
    //                             <div className="form-group">
    //                                 <input type="password" className="form-control inputss" placeholder="Your Password..." ref={password} />
    //                             </div>
    //                             <div className="form-group">
    //                                 <button type="submit" className="btn btn-primary buttonss" >Login</button>
    //                             </div>
    //                         </form>
    //                     </div>
    //                 </div>
    //             }
    //         </div >
    //     );
//     }


}
