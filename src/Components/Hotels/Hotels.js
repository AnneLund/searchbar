import React from "react";
import styled from "styled-components";

const Hotel = styled.figure`
display: flex;
gap: 2em;
height: auto;
img{
width: 30vw;
height: auto;
margin: auto;
}
`

const SearchContainer = styled.section`
display: flex;
flex-direction: column;
`


export default function Hotels({ items }) {
  return (
    <SearchContainer>
      {items.map((el, i) => (
        <Hotel key={i} style={el.type === 'city' ? {'display': 'none'} : null}>
        <figcaption>
          <h2>{el.title}</h2>
        
        </figcaption>
        <img src={el.image}/>  
        </Hotel>
      ))}
    </SearchContainer>
  );
}