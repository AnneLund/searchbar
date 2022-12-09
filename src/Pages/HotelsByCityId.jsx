import React from 'react'
import styled from 'styled-components'
import {useParams, Link, Outlet} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { FaStar } from "react-icons/fa";
import Figure from '../Styles/Figure';

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
const HotelsByCityId = () => {
const [data, setData] = useState("");  
const {id} =  useParams();

const getData = () => {
    fetch("https://api.mediehuset.net/overlook/cities/by_country/" + id)
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

// const str = hotel.num_stars;
// const replaced = str.replace(/\D/g, '');
// let num;
// if (replaced !== '') {
//   num = Number(replaced);
// }

<section>

  {data.items.map(hotel => {
    return(
<Figure>
                <figcaption>
                 
                  <h3>{hotel.name}</h3>   
             
                  {/* <p className='stars'>{hotel.num_stars ? Array(num).fill(<FaStar fill='#F5E247'/>) : null }</p> */}
                  <p className='teaser'>{hotel.teaser}</p>  
                </figcaption>
               <img src={hotel.image}/>
          
                </Figure>       
    )
  })}
  

</section>
            
         : null }
    </Hotels>
  )
}

export default HotelsByCityId;