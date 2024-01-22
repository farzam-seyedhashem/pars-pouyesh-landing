import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
        <head>
            <script  async type={'text/javascript'} id={"google-tag-manager"} dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WMVT9J6J');`}}></script>
            <title></title>
            <meta name='robots' content='noindex'/>
            <meta name={"title"} content={""}/>
            <meta name="viewport" content="width=device-width"/>
            <meta name="next-head-count" content="2"/>
            <meta charSet="utf-8"/>
            <Head/>
        </head>


      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
