import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country/Country';

function App() {

  const [totalCountry, setTotalCountry] = useState([])
  const [displayCountry, setDisplayCountry] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {


    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        setTotalCountry(data)
        setDisplayCountry(data)
        setLoading(true)
      })


  }, [])

  const handleSearch = e => {
        const searchText = e.target.value;
        const matchCountry = totalCountry.filter(country => country.name.common.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayCountry(matchCountry)
        
  }
  return (
    <div className='wrapper'>
      <h3>Total country {totalCountry.length} in the world !</h3>
      <div className='search-country'>
        <input type="text" onChange={handleSearch} placeholder='search country' />
      </div>
      <div className='country-wrapper'>
        {
          loading ? displayCountry.map(country => <Country country={country}></Country>) : <p style={{textAlign:"center"}}>Loading...</p>
        } 
      </div>
    </div>
  );
}

export default App;
