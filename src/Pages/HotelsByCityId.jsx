import React from 'react'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaStar } from "react-icons/fa";
import {OverLine, UnderLine, FrontText} from '../Styles/h1.styled'
import {RoomsContainer, Room} from '../Styles/Rooms.styled'
import crown from '../Assets/Images/overlook-crown.jpg'
import ShowMore from 'react-show-more-button';

const Country = styled.div`
margin: 0 auto;
width: 100%;
header{
height: 10vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #000000cf;
h3{
  color: white;
  font-size: 3vw;
  text-shadow: grey 2px 2px 10px;
}

.stars{
  color: #ff99;
  font-size: 1.5em;
}


}
img{
  width: 50%;
}

figcaption{
  font-size: 0.8em;
}
`

const Container = styled.header`
background-image: url(${crown});
background-position: 40% 60%;
background-repeat: no-repeat;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
height: 30vh;
`

const HotelsContainer = styled.div`
h2{
text-align: center;
margin: 1em;
font-size: 2em;
}  
`

const CityContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const City = styled.figure`
  width: 70%;
  display: flex;
  margin: 1em auto;
  background-color: #cbcbcba1;
  box-shadow: #0000009b 5px 5px 5px;
  padding: 1em;
  gap: 3em;
  figcaption{
    width: 50%;
    h3{
    font-weight: 600;
    margin-bottom: .5em;
  }  
  }

  img{
    width: 250px;
    height: 200px;
  }
`

const Gallery = styled.div`
display: grid;
grid-template-columns: 150px 150px;
grid-gap: 1em;
padding: 1em;
img{
  width: 150px;
  height: 100px;
}
`

const HotelsByCityId = () => {
const [data, setData] = useState("");  
const {id} =  useParams();

const getData = () => {
    fetch("https://api.mediehuset.net/overlook/countries/" + id)
          .then(response => {
            return response.json()
          })
          .then(data => {
            console.log(data)
            setData(data)
          })
      }

useEffect(() => {      
    getData();
}, [])

return (   
  <>
      {data.status === 'Ok' ?   
   <article>         
  <Container>
    <FrontText>
          <OverLine><h1>Find din by</h1> </OverLine>
          <UnderLine></UnderLine>    
          </FrontText>  
  </Container>
  

      <Country>
         <header>
          <h3>{data.item.name}</h3>  
        </header> 
      </Country>

      <CityContainer>

        {data.item.cities.items.map(city => {
          return(
        <City>
<figcaption>
  <h3>{city.name}</h3>
  <p>{city.description}</p>
</figcaption>
<img src={city.image} alt={city.name}/>
        </City>   
          )
        })}
  
      </CityContainer>

  
  </article>
  : null }
  </>        
          
        )
}

export default HotelsByCityId;