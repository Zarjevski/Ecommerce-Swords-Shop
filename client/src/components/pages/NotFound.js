import React from 'react'
import NavigationButton from '../buttons/NavigationButton'
import FullSection from '../blocks/FullSection'
import H1 from '../Headings/H1'

const NotFound = () => {
  return (
    <FullSection additional={"flex-col"}>
        <H1>Sorry, the page you looking for not found.</H1>
        <NavigationButton text={"GO BACK"} to={-1}/>
    </FullSection>
  )
}

export default NotFound