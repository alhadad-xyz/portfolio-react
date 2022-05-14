import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import Projects from '../views/Projects'
import Skills from '../views/Skills'
import About from '../views/About'

function Router(props) {
    return (
        <div className="whitebg bg-gray-50 font-primary w-screen h-screen text-gray-50">
        <div className="blackbg bg-gray-900 w-screen h-80 top-0 left-0 absolute lg:w-1/3 lg:h-screen"></div>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/projects'>
                    <Projects />
                </Route>
                <Route exact path='/skills'>
                    <Skills />
                </Route>
                <Route exact path='/about'>
                    <About />
                </Route>
            </Switch>
        </div>
    )
}

export default Router;