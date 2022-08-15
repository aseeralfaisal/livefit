import { createSlice } from '@reduxjs/toolkit'

export const workoutSlice = createSlice({
  name: 'workout',
  initialState: {
    workouts: [],
    specificExercises: [],
    exerciseTarget: '',
    UserExercises: [],
  },
  reducers: {
    setWorkouts: (state, { payload }) => {
      state.workouts = payload
    },
    setSpecificExercises: (state, { payload }) => {
      state.specificExercises = payload
    },
    setExerciseTarget: (state, { payload }) => {
      state.exerciseTarget = payload
    },
    setUserExercises: (state, { payload }) => {
      state.UserExercises = payload
    },
  },
})

export const { setWorkouts, setSpecificExercises, setExerciseTarget, setUserExercises } = workoutSlice.actions
