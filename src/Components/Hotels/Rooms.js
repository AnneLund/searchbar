import React from 'react'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaStar } from "react-icons/fa";
import {OverLine, UnderLine, FrontText} from '../../Styles/h1.styled'
import {RoomsContainer, Room} from '../../Styles/Rooms.styled'
import crown from '../../Assets/Images/overlook-crown.jpg'
import ShowMore from 'react-show-more-button';

const Hotel = styled.article`
header{
height: 15vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #000d;
h1{
  color: white;
  font-size: 5vw;
  text-shadow: grey 2px 2px 10px;
}

.stars{
  color: #ff99;
  font-size: 1.5em;
}
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

const HotelById = () => {
    const [data, setData] = useState("");  
    const {id} =  useParams();

    const getData = () => {
        fetch("https://api.mediehuset.net/overlook/hotels/" + id)
              .then(response => {
                return response.json()
              })
              .then(data => {
                setData(data)
              })
          }
    
    useEffect(() => {      
        getData();
    }, [])

    console.log(data)

// let year = data.item.num_stars;
// let iyear = parseInt(year, 10);
// console.log(iyear);//2020

      return (
       
<>
    {data.status === 'Ok' ?   
 <article>
<Hotel key={data.item.id}>
<header>
<h1>{data.item.title}</h1>

{/* <p className='stars'>{Array(iyear).fill(<FaStar style={{'margin': '0 5px'}}/>)}</p> */}
</header>                       
</Hotel>      
                 
<Container>
  <FrontText>
        <OverLine><h1>Find dit værelse</h1> </OverLine>
        <UnderLine></UnderLine>    
        </FrontText>  
</Container>

<RoomsContainer>
  <h2>Find dit værelse</h2>
{data.item.rooms.items.map(room => {
  return(
    <Room>

      <img src={room.images[0].image}/>

  <ShowMore maxHeight={240}>
    <figcaption>
      <h3>{room.room_title}</h3>
      <h4>{room.hotel_name}</h4>
      <h5>{room.area}. Plads til {room.num_persons} personer</h5>
      <p>{room.description}</p>
      <p className='price'>Fra {room.day_price_normal} DKK</p>
    </figcaption>
  
<Gallery>
  {room.images.map(img => {
    return <img key={img.id} src={img.image} alt={img.title}/>
  })}
</Gallery>
     </ShowMore>
    </Room>
  )
})}
</RoomsContainer>

</article>
: null }
</>        
        
      )
}

export default HotelById;