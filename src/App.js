// import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect,useRef} from 'react';

const format = (timer) =>{
  const mins = Math.floor(timer/60);
  timer %= 60;
  return `${mins} : ${timer < 10 ? "0" : ""}${timer}`
}
function App() {
  const [click, setClick] = useState(false);
  const [timer, setTimer] = useState(0);
  const timerId = useRef(null);

  const toggleHandler = () =>{
    setClick(!click);
  }
  const reset = () =>{
    setClick(false);
    setTimer(0);
  }
  useEffect(()=>{
    timerId.current = setInterval(()=>{
      if(click){
        setTimer((prevTimer)=>prevTimer+1);
      }
    },1000);
    return () =>{
      clearInterval(timerId.current);
    }
  },[timer,click])

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {format(timer)}</p>
      <button onClick={toggleHandler}>{click? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
