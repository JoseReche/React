import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import ApiRickAndMorty from './pages/ApiRickAndMorty'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ApiRickAndMorty />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App