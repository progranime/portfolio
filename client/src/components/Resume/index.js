import React from 'react'

const Index = () => {
    return (
        <div className="resume">
            <section>
                <div className="row">
                    <div className="col s12 m3">
                        <img
                            src={`${
                                window.location.origin
                            }/images/assets/dp2.jpg`}
                            alt=""
                            className="responsive-img"
                        />
                    </div>
                    <div className="col s12 m9">
                        <h5>JEREMY ESPINOSA</h5>
                        <p>
                            <strong>
                                <i>Web Developer</i>
                            </strong>
                        </p>
                        <p>
                            Experienced Web Developer seeking opportunity to
                            bring knowledge of programming. And a self-motivated
                            IT professional with huge knowledge and proficiency
                            in HTML, CSS, JavaScript, JQuery, Reactjs, Nodejs,
                            PHP and mobile responsive web development, as well
                            as strong skills and ability in writing clean and
                            efficient code.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h5>Personal Information</h5>
                <hr />
                <div className="row">
                    <div className="col s12 m6">
                        <ul>
                            <li>
                                <strong>Address:</strong>
                                <p>
                                    866 Mahogany Lane, C. Dela Paz St. Caniogan
                                    Pasig City
                                </p>
                            </li>
                            <li>
                                <strong>Email:</strong>
                                <p>jeremyespinosa1995@gmail.com</p>
                            </li>
                            <li>
                                <strong>Education:</strong>
                                <p>
                                    2012-2016 <br />
                                    BS Computer Science, Technological Institute
                                    of the Philippines (TIP), Quezon City
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="col s12 m6">
                        <ul>
                            <li>
                                <strong>Contact:</strong>
                                <p>+63 915 979 5830</p>
                            </li>
                            <li>
                                <strong>Linkedin Account:</strong>
                                <p>
                                    <a
                                        href="https://www.linkedin.com/in/jeremy-espinosa-213236119/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://www.linkedin.com/in/jeremy-espinosa-213236119/
                                    </a>
                                </p>
                            </li>
                            <li>
                                <strong>Portfolio:</strong>
                                <p>
                                    <a
                                        href="https://jeremyespinosa.herokuapp.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://jeremyespinosa.herokuapp.com/
                                    </a>
                                </p>
                            </li>
                            <li>
                                <strong>Languages:</strong>
                                <p>Filipino, English</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <h5>Work Experience</h5>
                <hr />
                <div className="row">
                    <div className="col s12 m3">
                        <strong>August 2017 - Present</strong>
                    </div>
                    <div className="col s12 m9">
                        <h6>
                            <strong>MUSIC Tribe</strong>
                        </h6>
                        <p>
                            <i>Web Specialist</i>
                        </p>
                        <hr />
                        <ul className="list list--style">
                            <li>
                                Responsible for creating, improving and
                                developing websites using best practices in
                                coding
                            </li>
                            <li>
                                Provides support to current websites to enhance
                                and clean up code for better performance
                            </li>
                            <li>
                                Handles Data which focuses in downloads,
                                software and documents of the website requested
                                by stakeholders
                            </li>
                            <li>
                                Creates Automation Project to avoid repetitive
                                task of the company
                            </li>
                            <li>
                                Follows Mobile First Design and Modular coding
                                to have better structure of coding
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m3">
                        <strong>June 2016 - July 2017</strong>
                    </div>
                    <div className="col s12 m9">
                        <h6>
                            <strong>Gee Pacific Services Inc</strong>
                        </h6>
                        <p>
                            <i>Web Developer</i>
                        </p>
                        <hr />
                        <ul className="list list--style">
                            <li>
                                Was responsible for ensuring and maintaining
                                that websites are properly working on a daily
                                basis
                            </li>
                            <li>
                                Was responsible for creating responsive websites
                                for better usage in mobile devices
                            </li>
                            <li>
                                Was also responsible for utilizing Chinese CMS
                                software in creating websites
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <h5>Projects</h5>
                <hr />

                <div className="row">
                    <div className="col s12 m3">
                        <strong>MUSIC Tribe </strong>
                    </div>
                    <div className="col s12 m9">
                        <div>
                            <h6>
                                <strong>Business Card Generator</strong>
                            </h6>
                            <p>
                                <i>Front & Back End Developer</i>
                            </p>
                            <hr />

                            <ul className="list list--style">
                                <li>
                                    Automates the creation of Business Card of
                                    employees
                                </li>
                                <li>
                                    CRUD (Create, Read, Update, Delete)
                                    functionality of the system
                                </li>
                                <li>
                                    Sending email to the admin for approving the
                                    created Business Card
                                </li>
                                <li>
                                    Admin dashboard for updating the status of
                                    those Business Card created
                                </li>
                                <li>
                                    Manage users who can access with admin
                                    rights
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h6>
                                <strong>Digital Assets Management</strong>
                            </h6>
                            <p>
                                <i>Front & Back End Developer</i>
                            </p>
                            <hr />

                            <ul className="list list--style">
                                <li>Manages digital assets of the company</li>
                                <li>
                                    Search through available assets to avoid
                                    duplication
                                </li>
                                <li>
                                    Adding/Updating tags/keywords of the assets
                                    to search easily
                                </li>
                                <li>Favorites assets to have collection</li>
                                <li>
                                    Can group download assets and compress it in
                                    a zip file
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h6>
                                <strong>Avatar Maker</strong>
                            </h6>
                            <p>
                                <i>Front & Back End Developer</i>
                            </p>
                            <hr />

                            <ul className="list list--style">
                                <li>Automating the creation of the avatar</li>
                                <li>
                                    Creating Avatar based on gender, position
                                    you want
                                </li>
                                <li>
                                    Customizing avatar you've chosen from top to
                                    bottom of body parts
                                </li>
                                <li>Storing of avatar you've created</li>
                                <li>
                                    Searching Functionality for the other user
                                    to see your created avatar
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h6>
                                <strong>Job Description / Pledge</strong>
                            </h6>
                            <p>
                                <i>Front & Back End Developer</i>
                            </p>
                            <hr />

                            <ul className="list list--style">
                                <li>
                                    Automating job description of the company’s
                                    employee
                                </li>
                                <li>
                                    CRUD (Create, Read, Update, Delete)
                                    functionality
                                </li>
                                <li>
                                    CRUD functionality will depends on its user
                                    role
                                </li>
                                <li>Exporting of data to CSV file</li>
                                <li>Tracing kuser action to the application</li>
                            </ul>
                        </div>

                        <div>
                            <h6>
                                <strong>
                                    Tannoy, TC Electronic, TC Helicon, Lab
                                    Gruppen, Behringer, Midas Website
                                </strong>
                            </h6>
                            <p>
                                <i>Front End Developer</i>
                            </p>
                            <hr />

                            <ul className="list list--style">
                                <li>Supporting current and old website</li>
                                <li>
                                    Improving coding structure using Modular
                                    Pattern Design
                                </li>
                                <li>
                                    Handling data request to updates the
                                    downloads, software and documents of the
                                    product
                                </li>
                                <li>
                                    Creating new prototype of the current
                                    website for better experience for the user
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m3">
                        <strong>Gee Pacific Technology Services Inc</strong>
                    </div>
                    <div className="col s12 m9">
                        <h6>
                            <strong>Superants.inc Website</strong>
                        </h6>
                        <p>
                            <i>Front End Developer</i>
                        </p>
                        <hr />

                        <ul className="list list--style">
                            <li>
                                Created informational websites to know what
                                company offers
                            </li>
                            <li>Used Google Maps API</li>
                            <li>Created contact form to know users concerns</li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m3">
                        <strong>Thesis</strong>
                    </div>
                    <div className="col s12 m9">
                        <h6>
                            <strong>GeoSCAN</strong>
                        </h6>
                        <p>
                            <i>Mobile Developer</i>
                        </p>
                        <hr />

                        <ul className="list list--style">
                            <li>
                                Programmer and concept developer of this
                                application
                            </li>
                            <li>
                                Assigned to acquire data from the Police station
                                of the target location of this app
                            </li>
                            <li>
                                Assigned to utilize the Google Maps API to
                                provide the functionality needed by the
                                application
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div className="row">
                    <div className="col s12 m6">
                        <h5>Skills</h5>
                        <hr />
                        <ul className="list list--style">
                            <li>HTML/HTML5</li>
                            <li>
                                CSS/CSS3 (LESS,SCSS), Mobile First Design, BEM
                                naming convention
                            </li>
                            <li>Bootstrap, Materializecss</li>
                            <li>
                                Javascript (Modular Pattern Design), jQuery,
                                AJAX, ReactJS, Redux
                            </li>
                            <li>Handlebar Template</li>
                            <li>Nodejs</li>
                            <li>PHP, MySQL</li>
                            <li>MVC Framework CodeIgniter</li>
                            <li>WordPress</li>
                            <li>Java, Hybris</li>
                        </ul>
                    </div>
                    <div className="col s12 m6">
                        <h5>Tools</h5>
                        <hr />
                        <ul className="list list--style">
                            <li>Tortoise SVN, Git</li>
                            <li>JS Task Runner (Gulp, Grunt)</li>
                            <li>NPM, NVM</li>
                            <li>JIRA</li>
                            <li>Adobe Photoshop</li>
                            <li>Eclipse</li>
                            <li>Visual Studio Code, Sublime Text</li>
                            <li>HeidiSQL, SQLYog</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <h5>Certifications and Awards</h5>
                <hr />
                <ul className="list list--style">
                    <li>
                        Certificate of Recognition for being on the Dean’s List
                        for First Semester, School Year 2013-2014
                    </li>
                    <li>
                        Certificate of Recognition for being on the Dean’s List
                        for First Semester, School Year 2015-2016
                    </li>
                    <li>
                        Certificate of Recognition for being on the VPAA’s List
                        for Second Semester, School Year 20152016{' '}
                    </li>
                    <li>
                        Certificate of Recognition for winning 3rd place in the
                        Science and Technology Fair 2016 during TIP’s 54th
                        Foundation Anniversary
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Index
