import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';


function App() {
  const [data, setData] = useState([]);
  const getData = async() =>{
    try{
      const res = await fetch('https://restcountries.com/v3.1/all');
      const c = await res.json()
      setData(c);
    }catch(err){
      console.err(err);
    }
  } 
  useEffect(()=>{
    getData();
  },[])
  return (
    <div className="App">
      <div className='containerStyle'>
        {data.map((item)=>{
          return(
            <div className='cardStyle'>
              <img className='imageStyle' src={item.flags.png} alt="country-flag"/>
              <h2>{item.name.common}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
