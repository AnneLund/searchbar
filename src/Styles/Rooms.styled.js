import styled from "styled-components";

const RoomsContainer = styled.article`
display: flex;
flex-direction: column;
gap: 2em;
padding: 1em 0;

h2{
    text-align: center;
    border-bottom: black dotted 2px;
    padding: 1em 0;
}


`

const Room = styled.figure`
width: 50%;
margin: auto;
display: flex;
img{
    width: 250px;
    height: 200px;
}

figcaption{
    padding: 0 .5em;
 h4{
    margin-bottom: .5em;
    font-size: .8em;
 }

 h5{
    margin-bottom: .5em;  
 }
 .price{
    font-weight: 600;
    text-align: right;
    margin: .5em 0;
 }

}
`

export {RoomsContainer, Room}