import React from "react";
import {Link, useParams} from 'react-router-dom'
import styled from "styled-components";

const City = styled.figure`
display: flex;
gap: 2em;
height: auto;
img{
width: 30vw;
height: auto;
margin: auto;
}
`
const CityContainer = styled.section`
display: flex;
flex-direction: column;
`

export default function Cities({ items }) {


  return (
    <CityContainer>
      {items?.map((el) => (
        <City key={el.id} style={el.type === 'hotel' ? {'display': 'none'} : null}>
            <figcaption>
                <Link to={'/cities/' + el.id}>
                  <h2>{el.name}</h2>
                </Link>
                    <p>{el.description}</p>
            </figcaption>
            <img src={el.image}/>  
        </City>
      ))}
    </CityContainer>
  );
}