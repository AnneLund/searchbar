import React from 'react'
import useGetRoomList from '../Hooks/useGetRoomList';
import styled from 'styled-components';

const Latest = styled.article`
display: flex;
padding: 1em;
flex-wrap: wrap;
gap: 2em;
width: 80%;
margin: auto;
h4{
 width: 100%;
 font-size: 2em;
 margin-bottom: -20px;
}
p{
  font-size: 0.8em;
}
h3{
  margin: 0.2em 0;
}
`

const FigureNews = styled.figure`
width: 300px;

img{
  width: 250px;
  height: 150px;
}
`

const Rooms = () => {

return (
<Latest>
<h4>Se vores værelser</h4>

</Latest> 
  ) 
}

export default Rooms