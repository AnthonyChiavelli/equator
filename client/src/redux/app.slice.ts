import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../types'

const initialState: AppState = {
  loading: false,
  preview: undefined,
}

export const counterSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setPreview: (state, action: PayloadAction<string>) => {
      state.preview = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLoading, setPreview } = counterSlice.actions

export default counterSlice.reducer
