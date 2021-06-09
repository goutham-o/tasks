import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Table,
  // ListGroup,
} from 'react-bootstrap'
const Task2 = () => {
  const [name, setName] = useState('')
  const [rating, setRating] = useState('')
  const [customers, setCustomers] = useState([])
  const [servers, setServers] = useState([])

  // console.log(customers)

  useEffect(() => {
    const customer = async () => {
      const { data } = await axios.get('/api/task2')
      setCustomers(data)
    }
    const server = async () => {
      const { data } = await axios.get('/api/task2/servers')
      setServers(data)
    }
    customer()
    server()
  }, [])

  // console.log(fetch)

  const submitHandler = async (e) => {
    e.preventDefault()
    const { data } = await axios.post('/api/task2/create', { name, rating })
    if (data) {
      customers.push(data)
      setName('')
      setRating('')
    }
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Task2</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={submitHandler}>
                <Row>
                  <Col xs={6} md={6}>
                    <Form.Group controlId='customer'>
                      <Form.Label>Customer</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Enter Customer'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6} md={6}>
                    <Form.Group controlId='rating'>
                      <Form.Label>Rating</Form.Label>
                      <Form.Control
                        as='select'
                        required
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value=''>---select---</option>
                        <option value='1'>star 1</option>
                        <option value='2'>star 2</option>
                        <option value='3'>star 3</option>
                        <option value='4'>star 4</option>
                        <option value='5'>star 5</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

                <hr />
                <Button type='submit' variant='primary'>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={12}>
          <Table striped hover responsive className='table-sm'>
            <thead>
              <tr>
                {servers.map((ser) => (
                  <td key={ser.server}>
                    {`server ${ser.server} - rating ${ser.rating}`}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {customers.map((cust) => (
                <tr key={cust._id}>
                  {cust.rating === 1 ? (
                    <td>{`${cust.name}( star - ${cust.rating})`}</td>
                  ) : (
                    <td></td>
                  )}
                  {cust.rating === 1 ? (
                    <td>{`${cust.name}( star - ${cust.rating})`}</td>
                  ) : (
                    <td></td>
                  )}
                  {cust.rating <= 2 ? (
                    <td>{`${cust.name}( star - ${cust.rating})`}</td>
                  ) : (
                    <td></td>
                  )}
                  {cust.rating <= 2 ? (
                    <td>{`${cust.name}( star - ${cust.rating})`}</td>
                  ) : (
                    <td></td>
                  )}
                  {cust.rating <= 3 ? (
                    <td>{`${cust.name}( star - ${cust.rating})`}</td>
                  ) : (
                    <td></td>
                  )}
                  {cust.rating <= 3 ? (
                    <td>{`${cust.name}( star - ${cust.rating})`}</td>
                  ) : (
                    <td></td>
                  )}
                  {cust.rating <= 4 ? (
                    <td>{`${cust.name}( star - ${cust.rating})`}</td>
                  ) : (
                    <td></td>
                  )}
                  {cust.rating <= 4 ? (
                    <td>{`${cust.name}( star - ${cust.rating})`}</td>
                  ) : (
                    <td></td>
                  )}
                  {cust.rating <= 5 ? (
                    <td>{`${cust.name}( star - ${cust.rating})`}</td>
                  ) : (
                    <td></td>
                  )}
                  {cust.rating <= 5 ? (
                    <td>{`${cust.name}( star - ${cust.rating})`}</td>
                  ) : (
                    <td></td>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default Task2
