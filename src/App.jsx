import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Counter } from './features/counter/Counter'
import { NavBar } from './features/nav/NavBar'
import './App.css'
import Countries from './features/countries/Countries'

function App() {

  return (
    <>
      <NavBar />
      <h1>Hello World</h1>
      <Counter />
      <Countries />
    </>
  )
}

export default App
