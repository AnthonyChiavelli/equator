import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Section } from '../types'

const blankSection = (index: number): Section => ({
  index,
  problemCount: 10,
  operations: ['addition', 'subtraction'],
  lowerLimitDigitSize: 1,
  upperLimitDigitSize: 2,
})

const initialState: Section[] = [blankSection(0)]

export const counterSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    addNewSection: (state) => {
      state.push(blankSection(state.length))
    },
    updateSection: (state, action: PayloadAction<{ index: number; newSection: Section }>) => {
      state[action.payload.index] = action.payload.newSection
    },
  },
})

// Action creators are generated for each case reducer function
export const { addNewSection, updateSection } = counterSlice.actions

export default counterSlice.reducer
