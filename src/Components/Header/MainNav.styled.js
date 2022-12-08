import styled from "styled-components";

export const MainNav = styled.ul`
position: sticky;
top: 0;
display: flex;
gap: 10px;
height: auto;
z-index: 1;
background-color: black;
flex-wrap: wrap;
justify-content: space-between;
padding: ${(props) => (props.shrinkHeader ? "0.2rem" : "1rem")} 4rem;
transition: padding 500ms ease;


li{
    list-style: none;
    &:last-of-type{
        margin-left: 0;
    }
}

@media (max-width: 768px){
    padding: 1rem;
    height: auto;
    display: flex;
    justify-content: flex-end;

    li{
        width: 100%;
    }
}
`