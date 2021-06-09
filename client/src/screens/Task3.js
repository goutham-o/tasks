import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Bar } from 'react-chartjs-2'

const Task3 = () => {
  const [staffs, setStaffs] = useState({})
  const [select, setSelect] = useState(1)
  // const [chart, setChartData] = useState()
  useEffect(() => {
    const levels = async () => {
      const { data } = await axios.get(`/api/task3/${select}`)
      setStaffs(data)
    }
    levels()
  }, [select])

  const data = {
    labels: staffs.days,
    datasets: staffs.data,
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}></Col>
        <Col xs={12} md={6}>
          <Form.Group controlId='photoClarity'>
            <Form.Label>Levels</Form.Label>
            <Form.Control
              as='select'
              required
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option value='1'>level1</option>
              <option value='2'>level2</option>
              <option value='3'>level3</option>
              <option value='4'>level4</option>
              <option value='5'>level5</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={11}>
          <Bar data={data} options={options} />
        </Col>
      </Row>
    </Container>
  )
}

export default Task3
