import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import counterReducer from './reducer'
import { Provider } from 'react-redux'
import Unicafe from './Unicafe'
const store = createStore(counterReducer)

function App() {
  return (
    <Provider store={store}>
      <Unicafe />
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
