import React from 'react'
import NavigationButton from '../buttons/NavigationButton'
import Section from '../blocks/Section'
import H1 from '../elements/H1'

const NotFound = () => {
  return (
    <Section className='flex-col'>
      <>
        <H1>Sorry, the page you looking for not found.</H1>
        <NavigationButton text={"GO BACK"} to={-1}/>
      </>
    </Section>
  )
}

export default NotFound