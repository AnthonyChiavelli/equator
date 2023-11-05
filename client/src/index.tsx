import React from 'react'
import ReactDOM from 'react-dom/client'
import Builder from './pages/Builder/Builder'
import store from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Builder />
    </React.StrictMode>
  </Provider>
)
