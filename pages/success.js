import Icon from "@/components/Icon";
import Head from "next/head";
import Script from "next/script";

export default function Success(){
    return(
        <div className={"h-screen w-full bg-background flex items-center justify-center"}>
            {/*<Head>*/}
            {/*    <meta name='robots' content='noindex'/>*/}
            {/*</Head>*/}
            {/*Google Tag Manager*/}
            {/*<Script id={"google-tag-manager"} strategy={"beforeInteractive"} dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':*/}
            {/*    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],*/}
            {/*    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=*/}
            {/*    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);*/}
            {/*})(window,document,'script','dataLayer','GTM-KPFFX88');`}}/>*/}
            {/*End Google Tag Manager*/}
           <div className={"px-10 bg-white  py-10 rounded-[8px] text-center border border-black/[12%]"}>
            <Icon type={"fill"} className={"text-green-800 text-[48px]"}>
                check_circle
            </Icon>
            <h2 className={"text-green-800 font-bold text-title-large"}>
                درخواست شما با موفقیت ثبت شد
            </h2>

               <a href={"/"} className={"flex justify-center items-center border text-primary-brand border-primary-brand px-6 h-[40px] rounded-full mt-8"}>
                   بازگشت به صفحه قبل
               </a>
           </div>
        </div>
    )
}