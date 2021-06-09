import Mapp from '../models/mappModel.js'

const getMaps = async (req, res) => {
  try {
    const maps = await Mapp.find({}).skip(1000).limit(3000)
    res.status(200)
    res.json(maps)
  } catch (error) {
    console.log(error.message)
  }
}

const getCompleted = async (req, res) => {
  try {
    const charts = await Mapp.find({
      $and: [
        { profileStatus: 'familydetailsCompleted' },
        { gender: ['Male', 'Female'] },
      ],
    })
      .skip(1000)
      .limit(3000)
    const genders = new Array()
    const state = new Array()

    const data = charts.reduce((obj, v) => {
      if (v.gender === 'Male') {
        obj[v.state.toLowerCase().trim()] =
          (obj[v.state.toLowerCase().trim()] || 0) + 1
        return obj
      } else if (v.gender === 'Female') {
        obj[v.state.toLowerCase().trim()] =
          (obj[v.state.toLowerCase().trim()] || 0) + 1
        return obj
      }
    }, {})

    charts.forEach((chart) => {
      genders.push(chart.gender)
      state.push(chart.state.toLowerCase().trim())
    })

    const funs = [...new Set(state)]
    const label = []
    funs.forEach((fun) => {
      const second = Math.floor(Math.random() * 200) + 1
      const red = Math.floor(Math.random() * 255)
      const green = Math.floor(Math.random() * 255)
      const blue = Math.floor(Math.random() * 255)
      if (data.hasOwnProperty(fun)) {
        label.push({
          label: fun,
          data: [data[fun], second],
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        })
      }
    })

    const fetch = {
      gender: [...new Set(genders)],
      data: label,
    }
    // console.log(fetch)
    res.status(200)
    res.json(fetch)
  } catch (error) {
    console.log(error.message)
  }
}

export { getMaps, getCompleted }
