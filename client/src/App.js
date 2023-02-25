import './App.css'
import { Route, useLocation } from 'react-router-dom'
import { Landing, Home, Detail, Form, Error } from './views'
import { Background, NavBar } from './components'

function App() {
  const pathLocation = useLocation().pathname
  const location = pathLocation === '/home' || pathLocation.startsWith( '/detail/') || pathLocation === '/create'

  return (
    <>
      <Background>
       {location &&  <NavBar />}
        <Route exact path='/' render= { ()=> <Landing /> } />
        <Route exact path='/home' render= { ()=> <Home /> } />
        <Route exact path='/detail/:idCountry' render= { ()=> <Detail /> } />
        <Route exact path='/create' render= { ()=> <Form /> } />
        { !location && pathLocation !== '/' && <Route path= '*' render= { ()=> <Error />} /> }
      </Background>
    </>
  )
}

export default App
