import './App.css'
import { Route, useLocation } from 'react-router-dom'
import { Landing, Home, Detail, Form } from './views'
import { Background, NavBar } from './components'

function App() {
  const location = useLocation().pathname !== '/'

  return (
    <>
      <Background>
       {location &&  <NavBar />}
        <Route exact path='/' render= { ()=> <Landing /> } />
        <Route exact path='/home' render= { ()=> <Home /> } />
        <Route exact path='/detail:idFlag' render= { ()=> <Detail /> } />
        <Route exact path='/create' render= { ()=> <Form /> } />
      </Background>
    </>
  )
}

export default App
