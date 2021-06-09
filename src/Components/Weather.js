import React, {useState} from 'react';
import './css/style.css';
import axios from 'axios';

const Weather =() =>{

	let temperature ="40";
	let feelslike = "35";
	let weather ="Rainy";

	const [user, setUser] = useState({
		city: ""        
	});

	const [result,setResult] = useState(null);

	 const {city} = user;

	 const OnInputChange = e =>{
	 	setUser({...user,[e.target.name]: e.target.value})
	 }

	 const onSubmit = async e =>{
	 	e.preventDefault();

	 	const city1 = user.city;

	 	const url = 

	 	console.log(user);

	 	 await axios.get("http://api.weatherstack.com/current?access_key=4c230b010e2a8387a76f06111ed4c109&query="+city).then(response=>{
	 		console.log(response);

	 		setResult(response);

	 	}).catch(error =>{
	 		console.log(error);
	 	})

	 }

	return(
		<div className="container">
      
          <div className="box-wrapper">

          <form  autoComplete="off" onSubmit={e => onSubmit(e)}>
          	<input type="text"  className="input" required
          	  value={city}
              name = "city"
              onChange ={e=>OnInputChange(e)}
          	></input>

          	<br></br>

          	<h1 className="text">{user.city}</h1>

            {!result ? <p>No data found!!</p> :
            	<div>
          	<p>Temperature: {result.data.current.temperature}</p>   
          	<p>Feels Like: {result.data.current.feelslike}</p>
            <p>Weather Forecast: {result.data.current.weather_descriptions[0]}</p>
            </div>
        }

          	<button className="button" type="submit">Search</button>


          	</form>

          </div>

          </div>
		)
}

export default Weather;