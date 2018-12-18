import React from 'react'

import NavbarList from './List'
import NavbarDetail from './Detail'
import NavbarImageHolder from './ImageHolder'
import NavbarProfile from './Profile'
import NavbarContainer from './Container'
import NavbarSocial from './Social'

const Index = () => {
    return (
        <div className="navbar">
            <NavbarContainer>
                <NavbarProfile>
                    <NavbarImageHolder />
                    <NavbarDetail />
                </NavbarProfile>

                <NavbarList />

                <NavbarSocial />
            </NavbarContainer>
        </div>
    )
}

export default Index
