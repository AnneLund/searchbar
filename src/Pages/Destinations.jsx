import React from 'react'
import Figure from '../Styles/Figure';
import {OverLine, UnderLine, FrontText} from '../Styles/h1.styled'
import styled from 'styled-components';
import bg from '../Assets/Images/seljalandvoss-iceland.jpg'
import useGetDestinationByEndPoint from '../Hooks/useGetDestinationByEndPoint';
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'


const Container = styled.header`
background-image: url(${bg});
background-position: 40% 60%;
background-repeat: no-repeat;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
height: 40vh;
`

const Nav = styled.nav`
padding: 1em;
background-color: whitesmoke;
box-shadow: #00000075 2px 2px 2px;
ul{
  display: flex;
  justify-content: center;
  gap:2em;
  list-style: none;
  li{
    cursor: pointer;
    &:hover{
      color: red;
      transition: 500ms;
    }
  }
}
`

const CityContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  width: 50%;
  padding-top: 2em;
  margin: auto;
  img{
    width: 200px;
    height: 150px;
  }

  figcaption{
    padding: 1em;
  }

  h3{
    font-size: 1em;
    font-weight: 600;
  }

  p{
    font-size: 0.8em;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const Destinations = () => {
  const {id} =  useParams();
  const {state: country} = useGetDestinationByEndPoint('country');
  const [data, setData] = useState()

 const countryId = country.map(c => {
    return c.id;
    })
  const cityId = data?.items.map(city => {
      return city.id;
    })

  const countryName = country.map(country => {
      return country.name;
    })

  return (
  <article>
<Container>
  <FrontText>
        <OverLine><h1>Hoteller & Destinationer</h1> </OverLine>
        <UnderLine></UnderLine>    
        </FrontText>  
</Container>

    <Nav>
        <ul>
 {country.map(nav => {

  return(     
    <>
    <li key={nav.id}
    onClick={() => {
            fetch("https://api.mediehuset.net/overlook/cities/by_country/" + nav.id)
          .then(response => {
            return response.json()
          })
          .then(data => {
            setData(data)
          })
      }
    }
    >{nav.name}</li>
    </>
    )
 })}  
    </ul>
    </Nav>

   <CityContainer>

{data?.items ? <h2 style={countryName === countryId ? {'display': 'block'} : null}>Vores hoteller i </h2> : null}
  
  {data?.items.map(city => {

    return(
      <>
<Figure key={city.id}>
                <figcaption>
                  <h3>{city.name}</h3>   
                  {/* <p className='stars'>{hotel.num_stars ? Array(num).fill(<FaStar fill='#F5E247'/>) : null }</p> */}
                  <p className='teaser'>{city.description}</p>  
                </figcaption>
               <img src={city.image}/>
                </Figure>  
                </>  
    )
  })}
  </CityContainer>
  </article>
  
  )
}

export default Destinations;