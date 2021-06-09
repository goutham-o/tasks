import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'
import { Bar } from 'react-chartjs-2'

const CompletedChart = () => {
  const [completed, setCompleted] = useState({})
  // const [chart, setChartData] = useState()
  useEffect(() => {
    const levels = async () => {
      const { data } = await axios.get(`/api/task4/completed`)
      setCompleted(data)
    }
    levels()
  }, [])

  const data = {
    labels: completed.gender,
    datasets: completed.data,
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
      <Row className='justify-content-md-center'>
        <Col xs={12} md={11}>
          <Bar data={data} options={options} />
        </Col>
      </Row>
    </Container>
  )
}

export default CompletedChart
