import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Get the root element
const rootElement = document.getElementById('root')

// Create a root using createRoot
const root = createRoot(rootElement!) // 'rootElement!' tells TypeScript that we are sure it's not null

// Render the App component
root.render(<App />)
