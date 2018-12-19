import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
// styles
import './styles/app.css'
// components
import { Spinner, Navbar } from './components'
// routes
const Home = lazy(() => import('./routes/Home'))
const Portfolio = lazy(() => import('./routes/Portfolio'))
const PortfolioView = lazy(() => import('./routes/Portfolio/View'))
const Resume = lazy(() => import('./routes/Resume'))
const Contact = lazy(() => import('./routes/Contact'))

class App extends Component {
    render() {
        return (
            <Provider store={store}>
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
                                    component={props => (
                                        <Portfolio {...props} />
                                    )}
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
            </Provider>
        )
    }
}

export default App
