import mongoose from 'mongoose'

const sets = new mongoose.Schema({
  set: Number,
  reps: Number,
  weight: Number,
  id: String
})
const exercisesSchema = new mongoose.Schema({
  equipment: String,
  gifUrl: String,
  id: String,
  name: String,
  target: String,
  sets: [sets],
})

export default exercisesSchema
