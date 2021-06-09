import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Task1 from './screens/Task1'
import Task2 from './screens/Task2'
import Task3 from './screens/Task3'
import Task4 from './screens/Task4'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/task4' component={Task4}></Route>
          <Route path='/task3' component={Task3}></Route>
          <Route path='/task2' component={Task2}></Route>
          <Route path='/' component={Task1} exact></Route>
        </Container>
      </main>
    </Router>
  )
}

export default App
