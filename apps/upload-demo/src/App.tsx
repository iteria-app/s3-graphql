import React from 'react'
import UploadDemo from './UploadDemo'
import './App.css'
import { createClient, Provider } from 'urql'

const client = createClient({
  url: 'https://demo-orders.hasura.app/v1/graphql',
})
function App() {
  return (
    <div className="App">
      <Provider value={client}>
        <header className="App-header">
          <UploadDemo></UploadDemo>
        </header>
      </Provider>
    </div>
  )
}

export default App
