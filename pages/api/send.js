import {EmailTemplate} from '@/components/EmailTemplate';
import {Resend} from 'resend';
// import formidable from 'formidable';
import { redirect } from 'next/navigation';

import bodyParser from 'body-parser'
export const config = {
    api: {
        bodyParser: true
    },
}
const resend = new Resend("re_PgZuGxBH_4gsdh1zTwtcA49o8PX135BJq");

export default async function handler(req, res) {
    const {method} = req
    const reqData = req.body


    if (method === "POST") {
        // const form = formidable({multiples: true});
        // await form.parse(req, (err, fields, files) => {
        //     console.log(fields.name)
        // })
        const {data, error} = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['sales@parspooyesh.com'],
            subject: `${"درخواست دموی رایگان"+" "+reqData.name}`,
            react: EmailTemplate({reqData: reqData}),
        });
        if (error) {
             res.redirect(307, `/error`)
        }
        res.redirect(307, `/success`)
    } else {
        res.redirect(307, `/error`)
    }
    // switch (method) {
    //     case 'POST':
    //         console.log(req)
    //         try {
    //
    //         } catch (error) {
    //             console.error(error)
    //             res.status(400).json({success: false})
    //         }
    //         break;
    // }


};