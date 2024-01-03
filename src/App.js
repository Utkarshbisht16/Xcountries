// import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect,useRef} from 'react';


function App() {
  const [active, isActive] = useState(false);
  const [toggle, isToggle] = useState(false);
  const fName = useRef(null);
  const sName = useRef(null);

  var show = (
    <p>Full Name: {fName.current} {sName.current}</p>
  )
  const handel = (e) =>{
    e.preventDefault();
    var form = new FormData(document.getElementById("f"));
    var fname = form.get("fname");
    var sname = form.get("sname");
    fName.current = fname;
    sName.current = sname;
    isActive(true);
    isToggle(!toggle);
  }
  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form id='f' onSubmit={handel}>
        <label>First Name:</label>
        <input required type='text' name='fname'></input><br/>
        <label>Last Name:</label>
        <input required type='text' name='sname'></input><br/>
        <button type='submit'>Sumbit</button>
      </form>
      {active ? show : null}
    </div>
  );
}

export default App;
