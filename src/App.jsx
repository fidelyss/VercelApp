import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponenteOtimizado from '../Components/ComponenteOtimizado/ComponenteOtimizado'

function App() {
  return (
    <>
      <div style={{ width: '100vw', height: '100vh', backgroundColor: "blue" }}>
        <ComponenteOtimizado />

      </div>
      <div style={{ width: '100vw', height: '100vh', backgroundColor: "yellow" }}>
      </div>
      <div style={{ width: '100vw', height: '100vh', backgroundColor: "green" }}></div>
    </>
  )
}

export default App
