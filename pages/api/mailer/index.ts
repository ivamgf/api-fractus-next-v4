import React from 'react';
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';
import logo from '../../../public/logo.png'

export default function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    // const data: any = req.body

    let transporter = nodemailer.createTransport({
        host: 'app-fractus.orkneytech.com.br',
        port: 465,
        auth: {
            user: process.env.USERMAIL,
            pass: process.env.PASSMAIL
        }
    })

    let info = transporter.sendMail({
        from: `"Contact 👻" <${process.env.USERMAIL}>`, // sender address
        to: process.env.USERMAIL, // list of receivers
        replyTo: req.body.email,
        subject: req.body.subject, // Subject line
        text: req.body.message, // plain text body
        html: ` <h3>Mensagem App Fractus</h3>
                <br />
                <b>Nome Usuário:</b> <span>${req.body.name}</span>
                <br />
                <b>Assunto:</b> <span>${req.body.subject}</span>
                <br />
                <b>E:mail Usuário:</b> <span>${req.body.email}</span>
                <br />
                <b>Mensagem:</b><p>${req.body.message}</p>
                <br />
                <span>Powered by OrkneyTech</span>`, // html body
    }).then((response) => { res.send(response) })
      .catch((error) => { res.send(error) })    

}
