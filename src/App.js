// import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect,useRef} from 'react';


function App() {
  const [text, setText] = useState("");
  const [ans, setAns] = useState("");
  var handel = (val) =>{
    const x = val.target.innerHTML;
    if(x == '='){
      if(text == ""){
        setAns("Error");
      }else{
        let res = eval(text);
        setAns(res);
      }
    }else if(x == 'C'){
      setText("");
      setAns("");
    }else{
      setText(t => t + x);
    }
  }
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type='text' value={text}></input>
      <div id='result'>{ans}</div>
      <button onClick={handel}>1</button>
      <button onClick={handel}>2</button>
      <button onClick={handel}>3</button>
      <button onClick={handel}>+</button><br/>
      <button onClick={handel}>4</button> 
      <button onClick={handel}>5</button>
      <button onClick={handel}>6</button>
      <button onClick={handel}>-</button><br/>
      <button onClick={handel}>7</button>
      <button onClick={handel}>8</button>
      <button onClick={handel}>9</button>
      <button onClick={handel}>*</button><br/>
      <button onClick={handel}>C</button>
      <button onClick={handel}>0</button>
      <button onClick={handel}>=</button>
      <button onClick={handel}>/</button>
    </div>
  );
}

export default App;
      