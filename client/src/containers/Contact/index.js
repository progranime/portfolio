import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { sendEmail } from '../../actions/mailActions'
import { Form, FormInput, FormTextarea } from '../../components'

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        this.props.sendEmail({
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m6 offset-m3">
                    <h4>Contact Form</h4>
                    <p className="pb-5">
                        Let me know your concern here. <br /> I'm also accepting
                        freelance project in <strong>Web Development</strong>.
                        <br />
                        Please drop your email here.
                    </p>

                    <Form onSubmit={this.handleSubmit}>
                        {this.props.mail.hasSent && (
                            <h6 className="red-text">
                                Your Message has bent sent!
                            </h6>
                        )}
                        <FormInput
                            label="Name"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Jeremy Espinosa"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <FormInput
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="sample@gmail.com"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <FormTextarea
                            label="Message"
                            id="message"
                            name="message"
                            placeholder="Your concern here ..."
                            rows={5}
                            value={this.state.message}
                            onChange={this.handleChange}
                        />
                        <div className="right-align">
                            <button
                                className="btn waves-effect waves-light"
                                type="submit"
                            >
                                Send
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

Index.propTypes = {
    mail: PropTypes.object.isRequired,
    sendEmail: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    mail: state.mail
})

const mapDispatchToProps = {
    sendEmail
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
