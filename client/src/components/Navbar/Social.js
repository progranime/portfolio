import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Social = () => {
    return (
        <ul className="navbar__social">
            <li>
                <a
                    href="https://www.linkedin.com/in/jeremy-espinosa-213236119/"
                    target="_blank"
                >
                    <FaLinkedin />
                </a>
            </li>
            <li>
                <a href="https://github.com/progranime" target="_blank">
                    <FaGithub />
                </a>
            </li>
        </ul>
    )
}

export default Social
