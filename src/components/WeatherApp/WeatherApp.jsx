import { useEffect, useState } from 'react'
import './WeatherApp.css'
import search_icon from './images/search.png'
import cloud_icon from './images/cloud.png'
import wind_icon from './images/wind.png'
import humidity_icon from './images/humidity.png'


const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [unit, setUnit] = useState('metric');
    const [recentSearches, setRecentSearches] = useState([]);

    const API_KEY = '7c2cf17ff01cdb199f5a97db55177f26';
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

    const handleSearch = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&units=${unit}&appid=${API_KEY}`);
            if (!response.ok) {
                throw new Error('City not found!')
            }
            const data = await response.json();
            console.log(data);
            setWeatherData(data);
            updateRecentSearch(city);
        } catch (error) {
            console.log(error);
        }
        setCity("")
    }

    useEffect(() => {
        handleSearch();
    }, [])

    const updateRecentSearch = (newCity) => {
        const updatedRecentSearches = [newCity, ...recentSearches.slice(0, 4)];
        setRecentSearches(updatedRecentSearches);
        localStorage.setItem('recentSearches', JSON.stringify(updatedRecentSearches));

    }
    useEffect(() => {
        const recentSearchesFromStorage = JSON.parse(localStorage.getItem('recentSearches')) || [];
        setRecentSearches(recentSearchesFromStorage);
    }, []);


    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <div className="left">
                        <h2>Recent Searches</h2>
                        {recentSearches.map((city, index) => (
                            <li key={index} className='cityList'>{city}</li>
                        ))}
                    </div>


                    <div className='right'>
                        <div className='card'>

                            <div className="top-bar">
                                <input type="text" className="cityInput"
                                    placeholder='Enter a city'
                                    value={city}
                                    onChange={e => setCity(e.target.value)}
                                />
                                <div className="search-icon">
                                    <img src={search_icon} alt="search"
                                        onClick={handleSearch}
                                    />
                                </div>
                            </div>

                            {
                                weatherData && (
                                    <div>
                                        <div className="weather-image">
                                            <img src={cloud_icon} alt="" />
                                        </div>
                                        <div className="weather-description">{weatherData.weather[0].description}</div>
                                        <div className="weather-temp">{weatherData.main.temp}&deg; {unit == 'metric' ? "C" : "F"}</div>
                                        <div className="weather-location">{weatherData.name}</div>

                                        <div className="data-container">
                                            <div className="element">
                                                <img src={humidity_icon} alt="" className='icon' />
                                                <div className="data">
                                                    <div className="humidity-percentage">{weatherData.main.humidity}%</div>
                                                    <div className="text">Humidity</div>
                                                </div>
                                            </div>
                                            <div className="element">
                                                <img src={wind_icon} alt="" className='icon' />
                                                <div className="data">
                                                    <div className="wind-speed">{weatherData.wind.speed}km/h</div>
                                                    <div className="text">Wind Speed</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WeatherApp