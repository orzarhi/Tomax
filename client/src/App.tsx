import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Details, Home } from './pages'

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>

  )
}

