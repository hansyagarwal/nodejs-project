const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to: "thesmartaryan@gmail.com",
//     from: "thesmartaryan@gmail.com",
//     subject: 'sup',
//     text: 'ok'  
// })

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'thesmartaryan@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcom to the app, ${name}.`
    })
}

const sendCancelEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'thesmartaryan@gmail.com',
        subject: 'Cacellation email',
        text: `Goodbye ${name}. Thank you for choosing us.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}