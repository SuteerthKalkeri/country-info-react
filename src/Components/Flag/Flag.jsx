import React, { useState } from 'react'
import './Flag.css'

const Flag = ({selectedCountryName}) => {

    const [flagUrl, setFlagUrl] = useState('');
    const [countryInfo,setCountryInfo] = useState(null);

    const getInfo = () => {
        
        fetch( `https://restcountries.com/v3.1/name/${selectedCountryName}`).then(res=>res.json()).then((data) =>
         {
            const countryData = data.find((country) =>
                    country.name.common.toLowerCase() === selectedCountryName.toLowerCase() ||
                    country.name.official.toLowerCase() === selectedCountryName.toLowerCase()
                );
            setCountryInfo(countryData);
            console.log(countryInfo)
            if(countryData) {
                setFlagUrl(countryData.flags.png)
            }
             
         }).catch(err=> err)
        
    }

  return (
    <div className='flag'>
        <div className="btn">
        <button onClick={getInfo}>Get Info</button>
        </div>
      {countryInfo && (
                <div className='info'>
                    <div className="flag-icon">
                        {flagUrl && <img height="200px" width="350px" src={flagUrl} alt="Flag" />}
                    </div>
                    <div className="info-boxes">
                        <div className="continent">
                            <h3>Continent(s)</h3>
                            <p>{countryInfo.continents && countryInfo.continents.join(', ')}</p>
                        </div>
                        <div className="capital">
                            <h3>Capital(s)</h3>
                            <p>{countryInfo.capital && countryInfo.capital.join(', ')}</p>
                         </div>
                        <div className="population">
                            <h3>Population</h3>
                            <p>{countryInfo.population && countryInfo.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        </div>
                        <div className="map">
                            <h3>Map</h3>
                            <p><a href={countryInfo.maps.googleMaps}>Google Maps</a></p>
                        </div>
                        <div className="timezone">
                            <h3>Time Zone</h3>
                            <p>{countryInfo.timezones[0]}</p>
                        </div>
                    </div>
                    
                </div>
            )}
    </div>
  )
}

export default Flag
