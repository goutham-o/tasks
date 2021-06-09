import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  ListGroup,
} from 'react-bootstrap'
const Task1 = () => {
  const [phoneBrand, setPhoneBrand] = useState('')
  const [contact, setContact] = useState('')
  const [photoClarity, setPhotoClarity] = useState('')
  const [numberOfSumittion, setNumberOfSumittion] = useState('')
  const [compClg, setCompClg] = useState('')
  const [total, setTotal] = useState('')
  const [avg, setAvg] = useState('')
  const [fetch, setFetch] = useState({})

  useEffect(() => {
    const task = async () => {
      const { data } = await axios.get('/api/task1')
      setFetch(data)
    }
    task()
  }, [])
  const {
    brands,
    contact: fetchContact,
    photoClarity: fetchPhotos,
    submission,
    comCol,
  } = fetch
  // console.log(brands)

  const submitHandler = (e) => {
    e.preventDefault()
    const total1 =
      parseFloat(phoneBrand) +
      parseFloat(contact) +
      parseFloat(photoClarity) +
      parseFloat(numberOfSumittion) +
      parseFloat(compClg)
    const avg1 = parseFloat(total1 / 5)
    setTotal(total1)
    setAvg(avg1)
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Task1</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId='phoneBrand'>
                  <Form.Label>Phone Brand</Form.Label>
                  <Form.Control
                    as='select'
                    required
                    value={phoneBrand}
                    onChange={(e) => setPhoneBrand(e.target.value)}
                  >
                    <option value=''>---select---</option>
                    {brands &&
                      Object.keys(brands).map((keyName, i) => (
                        <option key={i} value={brands[keyName]}>
                          {keyName}
                        </option>
                      ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId='contact'>
                  <Form.Label>Contact</Form.Label>
                  <Form.Control
                    as='select'
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  >
                    <option value=''>---select---</option>
                    {fetchContact &&
                      Object.keys(fetchContact).map((keyName, i) => (
                        <option key={i} value={fetchContact[keyName]}>
                          {keyName}
                        </option>
                      ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId='photoClarity'>
                  <Form.Label>Photo Clarity</Form.Label>
                  <Form.Control
                    as='select'
                    required
                    value={photoClarity}
                    onChange={(e) => setPhotoClarity(e.target.value)}
                  >
                    <option value=''>---select---</option>
                    {fetchPhotos &&
                      Object.keys(fetchPhotos).map((keyName, i) => (
                        <option key={i} value={fetchPhotos[keyName]}>
                          {keyName}
                        </option>
                      ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId='numberOfSumittion'>
                  <Form.Label>Number Of Submission</Form.Label>
                  <Form.Control
                    as='select'
                    required
                    value={numberOfSumittion}
                    onChange={(e) => setNumberOfSumittion(e.target.value)}
                  >
                    <option value=''>---select---</option>
                    {submission &&
                      Object.keys(submission).map((keyName, i) => (
                        <option key={i} value={submission[keyName]}>
                          {keyName}
                        </option>
                      ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId='compClg'>
                  <Form.Label>Company / College</Form.Label>
                  <Form.Control
                    as='select'
                    required
                    value={compClg}
                    onChange={(e) => setCompClg(e.target.value)}
                  >
                    <option value=''>---select---</option>
                    {comCol &&
                      Object.keys(comCol).map((keyName, i) => (
                        <option key={i} value={comCol[keyName]}>
                          {keyName}
                        </option>
                      ))}
                  </Form.Control>
                </Form.Group>
                <hr />
                <Button type='submit' variant='primary'>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <h3>Task1 Details:</h3>
          <hr />
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h4>
                Phone Brand: <span>{phoneBrand}</span>
              </h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>
                Contact: <span>{contact}</span>
              </h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>
                Photo Clarity: <span>{photoClarity}</span>
              </h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>
                No.of Submission: <span>{numberOfSumittion}</span>
              </h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>
                Company / College: <span>{compClg}</span>
              </h4>
            </ListGroup.Item>
            {total && (
              <ListGroup.Item>
                <h4>
                  Total: <span>{total}</span>
                </h4>
              </ListGroup.Item>
            )}
            {avg && (
              <ListGroup.Item>
                <h4>
                  Average: <strong>{avg}</strong>
                </h4>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Task1
