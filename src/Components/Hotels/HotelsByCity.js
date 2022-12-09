import React from 'react'
import styled from 'styled-components'
import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { FaStar } from "react-icons/fa";
import Figure from '../../Styles/Figure';

const Hotels = styled.article`
margin: 1em;
display: flex;
flex-direction: column;
justify-content: center;
gap: 4em;


h1{
  font-size: 2em;
  margin: 3em auto 0 auto;
  width: 100%;
  text-align: center;
}

figure{
width: 700px;
margin: auto;
a{
  text-decoration: none;
  font-size: 1.5em;
}
.teaser{
  margin-top: 1em;
}
}
`
const HotelsByCity = () => {
const [data, setData] = useState("");  
const {id} =  useParams();

const getData = () => {
    fetch("https://api.mediehuset.net/overlook/hotels/by_city/" + id)
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
    <Hotels>
   <h1>Byens hoteller</h1>
{data.status === 'Ok' ?   

data.items.map((hotel, i) => {

const str = hotel.num_stars;
const replaced = str.replace(/\D/g, '');
let num;
if (replaced !== '') {
  num = Number(replaced);
}

            return(
                <Figure key={hotel.id}>
                <figcaption>
                 <Link to={'/hotel/' + hotel.id}>
                  <h3>{hotel.title}</h3>   
                </Link>  
                  <p className='stars'>{hotel.num_stars ? Array(num).fill(<FaStar fill='#F5E247'/>) : null }</p>
                  <p className='teaser'>{hotel.teaser}</p>  
                </figcaption>
               <img src={hotel.image}/>
                </Figure>  
              
            )
        }) : null }
    </Hotels>
  )
}

export default HotelsByCity