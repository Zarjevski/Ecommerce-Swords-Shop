import React from 'react'
import { Table, Thead, Tr, Th, Td } from "../../elements/Table";
import Section from "../../blocks/Section";
import Box from "../../blocks/Box"
import H2 from '../../elements/H2';

const Orders = () => {
  return (
    <Section>
      <Box className='flex-col'>
        <H2>ORDERS</H2>
        <Table>
          <Thead>
            <Tr>
              <Th>number</Th>
              <Th>product</Th>
              <Th>Price</Th>
              <Th>status</Th>
            </Tr>
          </Thead>
        </Table>
      </Box>
    </Section>
  )
}

export default Orders