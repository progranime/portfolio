import React, { Component } from 'react'

import { Banner } from '../../components'

export class Index extends Component {
    render() {
        return (
            <div>
                <Banner
                    backgroundSrc={`${
                        window.location.origin
                    }/images/assets/404.jpg`}
                    title="404 Page Not Found"
                    description="The page you are looking for was moved, removed, renamed or </br>
                    might never existed!"
                    link="/"
                    linkText="Go Home"
                />
            </div>
        )
    }
}

export default Index
