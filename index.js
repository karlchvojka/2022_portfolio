// Framework Imports
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

// Component Imports
import App from './src/App'

// Variable Definitions
const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
