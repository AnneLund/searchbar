import React from 'react'
import {Page} from '../Components/Layout/Page'
import useGetDestinationByEndPoint from '../Hooks/useGetDestinationByEndPoint';
import Figure from '../Styles/Figure';

const Destinations = () => {
  const {state: countries} = useGetDestinationByEndPoint('countries');
 console.log(countries)
  return (
  <div>

    {countries.map(land => {
      return(
        <p>{land.name}</p>
      )
    })}
  </div>
  )
}

export default Destinations;