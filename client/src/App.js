import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
// styles
import './styles/app.css'
import 'react-image-lightbox/style.css'
// components
import { Spinner, Navbar } from './components'
// routes
const Home = lazy(() => import('./routes/Home'))
const Portfolio = lazy(() => import('./routes/Portfolio'))
const CodeEditor = lazy(() => import('./routes/CodeEditor'))
const PortfolioView = lazy(() => import('./routes/Portfolio/View'))
const Resume = lazy(() => import('./routes/Resume'))
const Contact = lazy(() => import('./routes/Contact'))
const NotFound = lazy(() => import('./routes/NotFound'))

class App extends Component {
    componentDidMount() {
        window.document.title = `Jeremy's Portfolio - Home`
    }

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Router>
                        <Suspense fallback={<Spinner />}>
                            <Navbar />
                            <Switch>
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
                                    path="/code-editor"
                                    component={props => (
                                        <CodeEditor {...props} />
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

                                <Route
                                    component={props => <NotFound {...props} />}
                                />
                            </Switch>
                        </Suspense>
                    </Router>
                </div>
            </Provider>
        )
    }
}

export default App
