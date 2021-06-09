import Customer from '../models/customerModel.js'

const createCustomer = async (req, res) => {
  try {
    const { name, rating } = req.body
    const data = await Customer.create({
      name,
      rating,
    })
    res.status(201)
    res.json(data)
  } catch (error) {
    console.log(error.message)
  }
}

const getCustomer = async (req, res) => {
  try {
    const customer = await Customer.find({})
    res.status(200)
    res.json(customer)
  } catch (error) {
    console.log(error.message)
  }
}

export { createCustomer, getCustomer }
