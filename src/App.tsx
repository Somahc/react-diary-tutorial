import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Create from './pages/Create'

function App() {

  return (
    <>
      <div>
        <Header />
        {/* <Home /> */}
        {/* <Login /> */}
        <Create />
        <Footer />
      </div>
    </>
  )
}

export default App
