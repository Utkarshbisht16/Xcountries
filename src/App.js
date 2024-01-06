
// import logo from './logo.svg';
import './App.css';
// import React,{useState, useEffect,useRef} from 'react';

import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import DataTable from "./component/DataTable";
import Pagination from "./component/Pagination";

const App = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const data = async() =>{
    
      try{
        const data = await fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
        const res = await data.json();
        setItems(res);
      }catch(err){
        alert("Failed to fetch data");
      }
  }
  useEffect(() => {
     data();
  }, []);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Employee Data Table</h1>
      <DataTable currentItems={currentItems} />
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
      />
    </div>
  );
};
export default App;