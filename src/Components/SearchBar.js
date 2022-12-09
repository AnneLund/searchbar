import React from 'react'
import styled from 'styled-components';
import useGetDestinationByEndPoint from '../Hooks/useGetDestinationByEndPoint';
import {useState} from 'react'
import {Link} from 'react-router-dom'

const CityContainer = styled.div`
display: flex;
position: absolute;
background-color: #fff9;
width: 100%;
border-radius: 5px;
padding: 1em;
top: 25%;
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
const SearchContainer = styled.div`
  width: 60%;
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20%;
  top: 12%;
  z-index: 1;
  margin: auto;
  border-radius: 5px;
  background-color: whitesmoke;
 
  header{
    border-radius: 5px 0 0 5px;
    background-color: #abcd;
    width: 18vw;
    padding: 1em;
    border-right: grey solid 1px;
 
   h4{
  font-weight: 600;
}   
  }

  @media screen and (max-width: 600px) {
    width:auto;
    right: 0;
    header{
      width: auto;
      padding: 0;
    }
  }

`

const Input = styled.div`
input, select{
  width: 100px;
}

@media screen and (max-width: 600px) {
  input, select {
   width: auto;  
  }
 
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
    <>
    <SearchContainer>
      <header>
     <h4>Søg i hele verden</h4> 
     <p>Hvor vil du hen og hvornår?</p>  
      </header>
      
      <Input>
        <label>Destination:</label>
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
      </Input>

<Input>
  <label>Check ind:</label>
  <input type="date"/>
</Input>

<Input>
  <label>Check ud:</label>
  <input type="date"/>
</Input>

<Input>
  <label>Antal personer</label>
 <select>
  <option>0</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
 </select>
</Input>
<button onClick={() => {
fetch("https://api.mediehuset.net/overlook/countries/" + currentValue)
.then((response) => response.json())
.then((data) => setData(data));
}}>
Søg
</button>   
  </SearchContainer>

  {data? <CityContainer>
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

  </CityContainer> : null}

  </>
  )

   
}

export default SearchBar