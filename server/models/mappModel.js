import mongoose from 'mongoose'

const mapSchema = mongoose.Schema({
  profileStatus: String,
  gender: String,
  memberRole: String,
  state: String,
  latitude: String,
  longitude: String
})

const Mapp = mongoose.model('Mapp', mapSchema)
export default Mapp
