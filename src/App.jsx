import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import Video from './components/Video'
import Forms from './components/Forms'

function App() {
  return (
    <>
      <Header />
      <main>
        <List titulo='Lista 01'/>
        <List />
        <Video />
        <Forms/>
      </main>
      <Footer />
    </>
  )
}

export default App
