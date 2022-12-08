import React from 'react'
import styled from 'styled-components';
import useGetDestinationByEndPoint from '../Hooks/useGetDestinationByEndPoint';
import {useState} from 'react'
import {Link} from 'react-router-dom'

const CityContainer = styled.div`
display: flex;
justify-content: center;
gap: 1em;
img{
  width: 200px;
  height: 100px;
}

h3{
  margin-bottom: .5em;
}
`

const SearchBar = () => {
const [currentValue, setCurrentValue] = useState('');
const {state: country} = useGetDestinationByEndPoint('country');
const [data, setData] = useState()
const selectCountry = country.map(na => {
return ({value: na.name, label: na.name})
})

  return (
    <main>
      <h4>Søg i hele verden</h4>
      <div className='search'>
<select
        className="input-cont"
        value={currentValue}
        onChange={e => setCurrentValue(e.target.value)}
        options={selectCountry}
      >
    <option>Vælg et land</option>
{country.map(na => {
  return <option key={na.id} value={na.id}>{na.name}</option>
})}
        
      </select>
<button onClick={() => {
fetch("https://api.mediehuset.net/overlook/countries/" + currentValue)
.then((response) => response.json())
.then((data) => setData(data));

}}>
Søg
</button>


      </div>
   

    <CityContainer>
{data?.item.cities.items.map(city => {
  console.log(city)
  return(
       <Link key={city.id} to={'/cities/' + city.id}>
          <figure >
      <figcaption>
    <h3>{city.name}</h3>
  </figcaption>  
    <img src={city.image}/>
</figure>
       </Link>
  
  )
})}

  </CityContainer>
  </main>
  )

   
}

export default SearchBar