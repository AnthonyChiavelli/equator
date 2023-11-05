import { configureStore } from '@reduxjs/toolkit'
import optionsSlice from './options.slice'
import appSlice from './app.slice'

const store = configureStore({
  reducer: {
    options: optionsSlice,
    app: appSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
