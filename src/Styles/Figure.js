import styled from "styled-components";

const Figure = styled.figure`
display: flex;
gap: 2em;
height: auto;
img{
width: 30vw;
height: auto;
margin: auto;
}

h3{
    margin-bottom: 0;
    color: black;
    font-size: .8em;
    &:hover{
        color: red;
        transition: 500ms;
    }
}

.stars{
    margin: 0;
}
`

export default Figure;