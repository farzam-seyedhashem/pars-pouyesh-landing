import {EmailTemplate} from '@/components/EmailTemplate';
import {Resend} from 'resend';

import bodyParser from 'body-parser'

const resend = new Resend("re_PgZuGxBH_4gsdh1zTwtcA49o8PX135BJq");

export default async function handler(req, res) {
    const {method} = req
    const reqData = req.body

    if (method === "POST") {
        // http://65.109.183.1:3000/api/hello

         fetch("http://65.109.183.1:3000/api/hello", {
            method: "POST",
            body: JSON.stringify({data:req.body}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => response.json()).then((json) => {
          console.log(json)
            if (json) {
                res.redirect(301, `/success`)
            } else{
                res.redirect(301, `/`)
            }
        });
        // if (error) {
        //       res.redirect(301, `/`)
        // }
        //  res.redirect(301, `/success`)
    } else {
         res.redirect(301, `/`)
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