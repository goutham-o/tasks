import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CompletedChart from '../components/CompletedChart'
import Mapp from '../components/Mapp'

const Task4 = () => {
  return (
    <Container>
      <Row>
        <CompletedChart />
      </Row>
      <Row>
        <Mapp />
      </Row>
    </Container>
  )
}

export default Task4
