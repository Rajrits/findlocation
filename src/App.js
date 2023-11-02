import { useState } from "react";
import axios from'axios';
import Home from "./components/Home";
import Locations from "./components/Locations";


function App() {
  const [data,setData] = useState([]);
  const [postalcode,setPostalCode] = useState("");
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);

  const handleOnSearch = async()=>{
    setLoading(true)
   await axios.get(`https://api.zippopotam.us/in/${postalcode}`)
   .then((data)=>{
     setData(data.data)
     setLoading(false)
     setError(false)
   })
   .catch((err)=>{setError(true);setLoading(false);setData("")})
  }
  const handleOnReset=()=>{
    setData([]);
    setPostalCode("");
  }
   
   const OnPostalCodeEnter = (e)=>{
       
    setPostalCode(e.target.value);
   }
  return (
    <div className="App">
    <Home postalcode={postalcode} setPostalCode={setPostalCode} OnPostalCodeEnter={OnPostalCodeEnter} handleOnSearch={handleOnSearch} data = {data} handleOnReset={handleOnReset} loading = {loading} error ={error}/>
    <Locations data = {data}/>
    </div>
  );
}

export default App;
