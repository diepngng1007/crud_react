
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import ProductList from './pages/ProductList'
import ProductAdd from './pages/ProductAdd'
import ProductUpdate from './pages/ProductUpdate'
import ProductDetail from './pages/ProductDetail'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/add-product' element={<ProductAdd/>}/>
        <Route path='/update-product/:id' element={<ProductUpdate/>}/>
        <Route path='detail-product/:id' element={<ProductDetail/>}/>
      </Routes>
    </>
  )
}

export default App
