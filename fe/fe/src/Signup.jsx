import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Signin from "./Signin";
import axios from "axios";
import login from "././AuthContext"
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  //    try {
  //         const response  =await fetch(`${URL}signup`, {
  //           method:"POST",
  //           body:JSON.stringify({
  //             email : email,
  //             password: password,
  //             name: name,
  //             fname: fname,
  //             lname:lname
  //           }),
  //           headers:{
  //             "content-type":"application/json"
  //           }
  //         })

  async function Submit(e) {
    try {
      e.preventDefault();
      const res = await axios.post(
        "http://localhost:3000/user/signup",
        { email, password, name, fname, lname },
        {
          //   withCredentials: true, // Move this out of headers
          headers: {
            "Content-Type": "application/json",
          },
        }
        //     })
       
      );
       login({name : name  ,email : email});
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <>
        <form onSubmit={Submit}>
          <input
            type="text"
            placeholder="Enter you name "
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter you email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter you Passwordme "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter you fname "
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter you lname "
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            required
          />
          <br />
          <br />
          <button type="submit">Sign up </button>
        </form>

        <br />
        <br />
        <Link to="/Signin">Sign in</Link>
        {/* <p>navigae
        Already have an account?  <Navigate to={"./Signin"}/>
        <button>Signin</button>

      </p> */}
      </>
    </div>
  );
}
