import React, { Component } from 'react'

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
        console.log(this.state)
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m6 offset-m3">
                    <h4>Contact Form</h4>
                    <p className="pb-5">
                        Let me know your concern here. <br /> I'm also accepting
                        freelance project in <strong>Web Development</strong>.{' '}
                        <br />
                        Please drop your email here.
                    </p>

                    <Form onSubmit={this.handleSubmit}>
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
                        <button
                            className="btn waves-effect waves-light"
                            type="submit"
                        >
                            Send
                        </button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Index
