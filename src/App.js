
// import logo from './logo.svg';
// import './App.css';
// import React,{useState, useEffect,useRef} from 'react';

// import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';


function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const getData = async() =>{
    try{
      const res = await fetch('https://restcountries.com/v3.1/all');
      const c = await res.json()
      setData(c);
    }catch(err){
      console.error(err);
    }
  }
  const handel = (e) =>{
    setSearch(e.target.value);
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <div className="App">
    <input type='text' onChange={handel} className='Header' placeholder='Search for countries'/>
      <div className='containerStyle'>
        {search ? (
          (data.map((item)=>{
            var val = item.name.common;
            if(val.includes(search)){
              return(
                <div className='cardStyle' style={{flexDirection: 'column'}}>
                {/* <div style={{display:'flex', flexDirection:'column', width:200}} > */}
                  <img className='imageStyle' src={item.flags.png} alt="country-flag"/>
                  <h2>{item.name.common}</h2>
                </div>
              );
            }
            
          }))
        ) : (data.map((item)=>{
          return(
            <div className='cardStyle' style={{flexDirection: 'column'}}>
            {/* <div style={{display:'flex', flexDirection:'column', width:200}}> */}
              <img className='imageStyle' src={item.flags.png} alt="country-flag"/>
              <h2>{item.name.common}</h2>
            </div>
          );
        }))}
      </div>
    </div>
  );
}
export default App;