import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {

  return (
    <>
      <div>
        <Header />
        {/* <Home /> */}
        <Login />
        <Footer />
      </div>
    </>
  )
}

export default App
