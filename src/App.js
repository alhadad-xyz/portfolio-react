import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Switch>
          <Route exact path='/'>
              <Home />
          </Route>
          <Route path='/projects'>
              <Projects />
          </Route>
      </Switch>
    </div>
  )
}

export default App;
 