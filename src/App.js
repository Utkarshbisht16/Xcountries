// import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect,useRef} from 'react';


function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handel = (e) =>{
    e.preventDefault();
    if(username === 'user' && password === 'password'){
      setError("");
      setIsSubmitted(true);
    }else{
      setError("Invalid username or password");
      setIsSubmitted(false);
    }
  }
  return (
    <div className="App">
      <h1>Login Page</h1>
      {isSubmitted ? (
        <div>
          <p>Welcome, {username}!</p>
        </div>
      ):(
        <form onSubmit={handel}>
          {error && <p className='error'>{error}</p>}
          <label htmlFor='username'>
            Username:
          </label>
          <input type='text' placeholder='username' value={username} required onChange={(e)=>setUsername(e.target.value)}></input><br/>
          <label htmlFor='password'>
            Password:
          </label>
          <input type='text' placeholder='password' value={password} required onChange={(e)=>setPassword(e.target.value)}></input>
          <button type='submit'>Submit</button>
        </form>
      )}
      
    </div>
  );
}

export default App;
      