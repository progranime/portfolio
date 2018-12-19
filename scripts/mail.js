const nodemailer = require('nodemailer')

const { account } = require('../config/keys')

const main = {
    send: req => {
        return new Promise(resolve => {
            let html = `
            <p>Hi Jeremy Espinosa,<p>
            <p>An email from your portfolio website sends you an email from</p>
            <ul>
                <li><strong>Name: </strong>${req.name}</li>
                <li><strong>Email: </strong>${req.email}</li>
                <li><strong>Message: </strong>${req.message}</li>
            </ul>`

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: account.user, // generated ethereal user
                    pass: account.password // generated ethereal password
                }
            })

            // setup email data with unicode symbols
            let mailOptions = {
                from: `Portfolio Email:<${req.email}>`, // sender address
                to: `${account.user}`, // list of receivers
                subject: 'Portfolio Inquiries', // Subject line
                html: html // html body
            }

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) return console.log(error)

                console.log('Message sent: %s', info.messageId)
                console.log(
                    'Preview URL: %s',
                    nodemailer.getTestMessageUrl(info)
                )

                resolve({
                    message: 'email has sent!',
                    hasSent: true
                })
            })
        })
    }
}

module.exports = main
