import React, { useState } from 'react';
import "../Css/Login.css";
import Navbar from './Navbar';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';




const Login = () => {
  const id = useLocation();
  var idd = id.state;
  console.log(idd);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');




  const navigate = useNavigate()
  const handleSignup = (event) => {

    
    event.preventDefault();

    if (email === "" || name === "" || contact === "") {
      alert("Any of the elements must not be empty");
    } else {
      axios.post("http://localhost:5000/users/signup", {
        name: name,
        email: email,
        contact:contact
      })
      .then(function (response) {
         console.log(response)
         var iddd = response.data.data1.uid
         console.log(iddd)
        if (response.data.status === "Success") {
          
          
          const state1 = { id: 1, name: iddd };
          const state2 = { id: 2, name: idd };
          navigate("/Planpage", { replace: true, state:{state1,state2} });

        }
      })
      .catch(function (error) {
        
      })
      .finally(function () {
        setName("");
        setEmail("");
        setContact("");

      });
    }
  }

  return (
    <>
      <Navbar/>
      <div className="containerrr">
        <div className="card">
          <div className="card_title">
            <h1>Fill Your Details For Contact</h1>
          </div>
          <div className="form">
            <form action="/register" method="post">
              <input type="text"
                name="name"
                placeholder="USERNAME"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
                id="name"
                required />
              <input type="email"
                name="email"
                pattern="[a-zA-Z0-9._%+-]+@\.com"
                placeholder="EMAIL"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                id="email" />
              <input type="text"
                name="contact"
                placeholder="Contact"
                value={contact}
                onChange={(e) => { setContact(e.target.value) }}
                id="contact" />
               
                  <button onClick={handleSignup}>Sign Up</button>
                
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
