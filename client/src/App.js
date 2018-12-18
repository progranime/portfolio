import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// styles
import './styles/app.css'

// components
import { Spinner, Navbar } from './components'

// routes
/* import Home from './routes/Home'
import Portfolio from './routes/Portfolio'
import PortfolioView from './routes/Portfolio/View'
import Resume from './routes/Resume'
import Contact from './routes/Contact' */

const Home = lazy(() => import('./routes/Home'))
const Portfolio = lazy(() => import('./routes/Portfolio'))
const PortfolioView = lazy(() => import('./routes/Portfolio/View'))
const Resume = lazy(() => import('./routes/Resume'))
const Contact = lazy(() => import('./routes/Contact'))

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Suspense fallback={<Spinner />}>
                            <Navbar />

                            <Route
                                exact
                                path="/"
                                component={props => <Home {...props} />}
                            />
                            <Route
                                exact
                                path="/portfolio"
                                component={props => <Portfolio {...props} />}
                            />

                            <Route
                                exact
                                path="/portfolio/:id/view"
                                component={props => (
                                    <PortfolioView {...props} />
                                )}
                            />
                            <Route
                                exact
                                path="/resume"
                                component={props => <Resume {...props} />}
                            />
                            <Route
                                exact
                                path="/contact"
                                component={props => <Contact {...props} />}
                            />
                        </Suspense>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
