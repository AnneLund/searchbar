import styled from "styled-components";

const OverLine = styled.div`
position: relative;
border-bottom: 60px solid #0009;
border-right: 50px solid transparent;
transform: rotateX(160deg);
height: 0;
width: 70vw;
margin: -3px 0;
`

const UnderLine = styled.div`
    border-bottom: 25px solid rgba(255, 0, 0, 0.461);
	border-right: 20px solid transparent;
	height: 0;
    width: 60vw;
    margin: 0;
    transform: rotateX(160deg);
`

const FrontText = styled.div`
width: 80%;

    h1{
        transform: rotateX(160deg);
        margin-left: 10px;
        font-size: 3vw;
        position: absolute;
        top: 5px;
        font-weight: 100;
        text-transform: uppercase;
        color: white;
    }
`

export {OverLine, UnderLine, FrontText};