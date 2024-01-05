// import "./styles.css";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState((previousValue) => ({
      count: previousValue.count + 1,
    }));
  }
  decrement() {
    this.setState((previousValue) => ({
      count: previousValue.count - 1,
    }));
  }
  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
// import logo from './logo.svg';
// import './App.css';
// import React,{useState, useEffect,useRef} from 'react';


// function App() {
//   const [countries, setCountries] = useState([]);
//   const [state, setState] = useState([]);
//   const [city, setCity] = useState([]);
//   const [selectedCity, setSelectedCity] = useState("");
//   const [selected, setSelected] = useState("");
//   const [selectedState, setSelectedState] = useState("");

//   const getData = async() =>{
//     try{
//       const res = await fetch('https://crio-location-selector.onrender.com/countries');
//       const data = await res.json();
//       setCountries(data);
//     }catch(err){
//       console.error(err);
//     }
//   }
//   const getStateData = async() =>{
//     try{
//       const res = await fetch(`https://crio-location-selector.onrender.com/country=${selected}/states`);
//       const data = await res.json();

//       setState(data);
//       setSelectedState("");
//       setCity([]);
//       setSelectedCity("");
//     }catch(err){
//       console.error("Error fetching states:", err);
//     }
//   }
//   const getCityData = async() =>{
//     try{
//       const res = await fetch(`https://crio-location-selector.onrender.com/country=${selected}/state=${selectedState}/cities`);
//       const data = await res.json();

//       setCity(data);
//       setSelectedCity("");
//     }catch(err){
//       console.error("Error fetching cities:", err);
//     }
//   }
//   const handel = (e) =>{
//     setSelected(e.target.value);
//   }
//   const handelState = (e) =>{
//     setSelectedState(e.target.value);
//   }
//   const handelCity = (e) =>{
//     setSelectedCity(e.target.value);
//   }
//   useEffect(()=>{
//     getData();
//   },[])
//   useEffect(()=>{
//     if(selected){
//       getStateData(selected);
//     }
//   },[selected])
//   useEffect(()=>{
//     if(selected && selectedState){
//       getCityData(selectedState);
//     }
//   },[selected, selectedState])
//   return (
//     <div className="App">
//       <h1>Select Location</h1>
//       <div>
//         <select onChange={handel} value={selected}>
//           <option value='' disabled>
//             Select Country
//           </option>
//           {
//             countries.map((item)=>{
//               return(
//                 <option value={item}>
//                   {item}
//                 </option>
//               )
//             })
//           }
//         </select>
//         <select onChange={handelState} value={selectedState}>
//           <option value='' disabled>
//             Select State
//           </option>
//           {
//             state.map((item)=>{
//               return(
//                 <option value={item}>
//                   {item}
//                 </option>
//               )
//             })
//           }
//         </select>
//         <select onChange={handelCity} value={selectedCity}>
//           <option value='' disabled>
//             Select City
//           </option>
//           {
//             city.map((item)=>{
//               return(
//                 <option value={item}>
//                   {item}
//                 </option>
//               )
//             })
//           }
//         </select>
//       </div>
//       {selectedCity && (
//         <h2 className=''result>
//           You selected <span className='highlight'>{selectedCity}</span>,
//           <span className='fade'>
//             {" "}
//             {selectedState}, {selected}
//           </span>
//         </h2>
//       )}
//     </div>
//   );
// }

// export default App;
      