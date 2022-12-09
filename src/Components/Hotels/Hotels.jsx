import React from 'react'
import {useParams, Link, Outlet} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { FaStar } from "react-icons/fa";
import Figure from '../../Styles/Figure';
import useGetDestinationByEndPoint from '../../Hooks/useGetDestinationByEndPoint';

const Hotels = () => {
    const [data, setData] = useState("");  
    const {state: country} = useGetDestinationByEndPoint('country');
    const {id} =  useParams();
    
    const getData = () => {
        fetch("https://api.mediehuset.net/overlook/cities/" + id)
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
                    <Figure key={i}>
                    <figcaption>
                     <Link to={hotel.id}>
                      <h3>{hotel.title}</h3>   
                    </Link>  
                      <p className='stars'>{hotel.num_stars ? Array(num).fill(<FaStar fill='#F5E247'/>) : null }</p>
                      <p className='teaser'>{hotel.teaser}</p>  
                    </figcaption>
                   <img src={hotel.image}/>
                    </Figure>  
                  
                )
            }) : null }
            <Outlet/>
        </>
      )
}

export default Hotels