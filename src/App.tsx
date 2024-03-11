import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Create from './pages/Create'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <div>
        <Header />
        {/* <Home /> */}
        {/* <Login /> */}
        {/* <Create /> */}
        <NotFound />
        <Footer />
      </div>
    </>
  )
}

export default App
