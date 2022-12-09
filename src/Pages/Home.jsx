import React from 'react'
import SearchBar from '../Components/SearchBar/SearchBar'
import styled from 'styled-components'
import header_image from '../Assets/Images/frankfurt-skyline-germany.jpg'
import {OverLine, UnderLine, FrontText} from '../Styles/h1.styled'
import News from '../Components/News/News'

const HeaderBg = styled.div`
    background-image: url(${header_image});
    background-position: center;
    height: 100vh;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Home = () => {
  return (
    <article>  
       <SearchBar/>

        <HeaderBg>
          <FrontText>
            <OverLine><h1>Velkommen til Hotel Overlook Online</h1> </OverLine>
            <UnderLine></UnderLine>    
          </FrontText>   
        </HeaderBg>

        <News/>
    </article>
  )
}
