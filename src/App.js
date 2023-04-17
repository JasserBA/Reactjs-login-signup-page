import React from 'react'
import './App.css'
import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
export default function ButtonFunction() {

   return (
  

    <section id="body">
    <body  className='Button-section'><div className='container'>
<form> 
     <header><h1>Welcome 👋</h1> </header>
     <div class='input-field'>
  <input type="text" required></input>
  <label>Email or Username</label>
</div>
<div class='input-field'>
  <input type="password" required></input>
  <label>Password</label>
</div>
      <div className='button'>
      <button>Log in</button>
      <p>
 <div className='text1'> <p style={{display:'inline-flex'}} className='prevent-select'>&#x2022;</p>Forget <a href='forget'>Username / Password?</a><br/></div>
  <p style={{display:'inline-flex'}} className='prevent-select'>&#x2022;</p> Don't have an account? <a href='#'>Sign up</a>
</p>
<div>
<div className='orsignup'>or Sign Up Using</div>
<div className='logos'><a href='#Facebook'><img src={require('./Facebook.png')} alt='Facebook'></img></a><a href='#Twitter'><img  src={require('./Twitter.png')}alt='Twitter'></img></a><a href='#Gmail'><img alt='Gmail' src={require('./Gmail.png')}></img></a>
</div>
</div>
      
      </div> </form> </div> </body></section>
       )}