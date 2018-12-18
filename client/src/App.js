import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// styles
import './styles/app.css'

// components
import { Spinner, Navbar } from './components'

// routes
const Home = lazy(() => import('./routes/Home'))
const Portfolio = lazy(() => import('./routes/Portfolio'))
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

                            <Route exact path="/" component={Home} />
                            <Route
                                exact
                                path="/portfolio"
                                component={Portfolio}
                            />
                            <Route exact path="/resume" component={Resume} />
                            <Route exact path="/contact" component={Contact} />
                        </Suspense>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
