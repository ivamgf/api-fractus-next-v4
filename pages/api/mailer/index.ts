import React from 'react';
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';
import NextCors from 'nextjs-cors';

export default function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    // const data: any = req.body

    NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     })

    let transporter = nodemailer.createTransport({
        host: 'https://app-fractus-v2-f28bf520b1b4.herokuapp.com',
        port: 465,
        auth: {
            user: process.env.USERMAIL,
            pass: process.env.PASSMAIL
        },
        headers: {
            "Access-Control-Allow-Origin": "*"
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
