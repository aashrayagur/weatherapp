import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const api = {
    key:'1d68f45710c50ffa904a566555c4fd18',
    base:"https://api.openweathermap.org/data/2.5/"
  }
  
  const [city,setCity] = useState("");
  const[weather, setWeather] = useState("")
  function handleChange (x){
    setCity(x.target.value)
  }
  
  function giveTemp(){

    fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`)
    .then(res => res = res.json())
    .then(result => setWeather(result))
    console.log(weather.main.temp);
    document.getElementById('myTemp').innerHTML=weather.main.temp;
  }

  
  return (
    <div className="App">
      <div className='weather-app'>
      <input placeholder='Enter your city name...' value={city} onChange={handleChange}></input>
      <button onClick={giveTemp}>Submit</button>

      <h2 id='myTemp'>{city}</h2>
      </div>
    </div>
  );
}

export default App;
