import Image from 'next/legacy/image'
import Icon from "@/components/Icon";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
import {useState, Fragment, useEffect} from "react";
import {Dialog, Transition} from '@headlessui/react'
import Script from "next/script";
import Head from "next/head";

export default function Home() {
    const featureSection = [
        {
            icon: "security",
            title: "افزایش امنیت شبکه",
            description: "هر کاربر پیش از اتصال به اینترنت با روش‌های امن و چند عاملی احراز هویت شده و امکان اتصال به شبکه بدون احراز هویت وجود نخواهد داشت. "
        },
        {
            icon: "rubric",
            title: "مشاهده و تحلیل رخدادهای شبکه در یک پنل",
            description: "مدیران می‌توانند در یک پنل، اطلاعات مربوط به ترافیک مصرف شده توسط کاربران (Connection log) و لاگ تغییرات ایجاد شده بر روی پروفایل کاربران (Audit log) توسط ادمین‌ها را مشاهده کنند."
        },


        {
            icon: "network_check",
            title: "افزایش کیفیت دسترسی به اینترنت برای پرسنل و بهبود بهره‌وری",
            description: "در بسیاری از مجموعه‌ها افراد زیادی به صورت هم‌زمان به اینترنت متصل می‌شوند. با تنظیم سرعت اینترنت برای کاربران به نسبت نیاز آن‌ها، کیفیت دسترسی به اینترنت برای همه فراهم می‌شود."
        },
        // {
        //     icon: "tools_pliers_wire_stripper",
        //     title: "عیب‌یابی آسان‌تر شبکه",
        //     description: "مدیران می‌توانند لاگ بلادرنگ درخواست‌های ارسال شده برای اتصال به شبکه را در IBSng به منظور عیب‌یابی مشاهده کنند."
        // },

        {
            icon: "description",
            title: "انطباق با الزامات قانونی کشور و ثبت لاگ شبکه",
            description: "مطابق با قوانین پلیس فتا، تمام ارائه‌دهندگان اینترنت اشتراکی باید لاگ ترافیک کاربران را حداقل تا 6 ماه ذخیره کنند تا در صورت بروز حملات سایبری، منشا حمله قابل شناسایی باشد."
        },
        {
            icon: "price_check",
            title: "کاهش هزینه‌های سازمان",
            description: "با تعیین سقف حجم و ترافیک و زمان مصرفی کاربران، منابع سازمانی به صورت بهینه مصرف می‌شوند."
        },
        {
            icon: "sentiment_very_satisfied",
            title: "راهبری آسان و جامع",
            description: "نرم‌افزار IBSng مدیران شبکه را قادر می‌سازد در یک پنل، رفتار و وضعیت کاربران و شبکه را مشاهده کرده و با استفاده از گزارش‌های متنوع، برای گسترش و توسعه زیرساخت‌های خود تصمیم‌گیری کنند."
        }
    ]
    const whichOneUseAccountingAppAnswers = [
        {
            title: "شرکت‌هایی با اینترنت اشتراکی برای پرسنل",
            icon: "cell_tower",
            image: "/office.jpg",

        },
        {
            title: "دانشگاه‌ها",
            icon: "school",
            image: "/university.jpg",

        },
        {
            title: "نیروگاه‌ها و پالایشگاه‌ها",
            image: "/refinery.jpg",
            icon: "factory"
        },
        {
            title: "دستگاه‌های دولتی",
            icon: "account_balance",
            image: "/gov.jpg",

        },
        {
            title: "هتل‌ها",
            icon: "hotel",
            image: "/hotel.jpg"
        },
        {title: "مراکز همایش و کنفرانس", image: "/conf.jpg", icon: "groups"},
        {title: "بیمارستان‌ها و مراکز درمانی", image: "/hospital.jpg", icon: "local_hospital"},
        {title: "فرودگاه‌ها و پایانه‌های مسافربری", image: "/airport.jpg", icon: "travel"},
        {title: "مراکز تفریحی و تجاری", image: "/shopping-center.jpg", icon: "nature_people"}
    ]
    const whyUS = [
        {
            title: "20+ سال سابقه فعالیت",
            icon: "check_circle",

        },
        {
            title: "آپ‌تایم 99.99% برای اتصال کاربران",
            icon: "clock_loader_90",
        },
        {
            title: "مدیریت 40+ هزار کاربر آنلاین همزمان",
            icon: "group",
        },
        {
            title: "پشتیبانی 24×7",
            icon: "support_agent",
        },
    ]
    const menu = [
        {
            title: "چرا IBSng؟",
            href: "#1"
        },
        {
            title: "مزایای نرم‌افزار اکانتینگ",
            href: "#2"
        },
        {
            title: "راهکار اکانتینگ برای شما",
            href: "#3"
        },
        {
            title: "مشتریان IBSng",
            href: "#4"
        },
        {
            title: "شرایط ویژه",
            href: "#5"
        },


    ]
    const primaryLogo = [
        {
            img: "1.jpg"
        },
        {
            img: "2.png"
        },
        {
            img: "3.jpg"
        },
        {
            img: "4.png"
        },
        {
            img: "5.png"
        },
        {
            img: "6.png"
        },
        {
            img: "7.jpg"
        },
        {
            img: "8.jpg"
        },
        {
            img: "9.jpg"
        },
        {
            img: "10.jpg"
        },
        {
            img: "11.png"
        },
        {
            img: "12.svg"
        },
        {
            img: "13.svg"
        },
        {
            img: "14.png"
        },
        {
            img: "15.png"
        },
        {
            img: "16.jpg"
        },
        {
            img: "17.jpg"
        },
        {
            img: "18.svg"
        },
        {
            img: "19.jpg"
        },
        {
            img: "20.png"
        },
        {
            img: "21.png"
        },
        {
            img: "22.webp"
        },
        {
            img: "23.png"
        },
        {
            img: "24.png"
        },
        {
            img: "25.png"
        },
        {
            img: "26.png"
        },

    ]
    const logo = [
        {
            img: "27.jpg"
        },
        {
            img: "28.jpg"
        },
        {
            img: "29.png"
        },
        {
            img: "30.webp"
        },
        {
            img: "31.jpg"
        },
        {
            img: "32.jpg"
        },
        {
            img: "33.png"
        },
        {
            img: "34.png"
        },
        {
            img: "35.png"
        },
        {
            img: "36.png"
        },
        {
            img: "37.jpg"
        },
        {
            img: "38.png"
        },
        {
            img: "39.jpg"
        },
        {
            img: "40.jpg"
        },
        {
            img: "41.jpg"
        },
        {
            img: "42.jpg"
        },
        {
            img: "43.jpg"
        },
        {
            img: "44.jpg"
        },
        {
            img: "45.webp"
        },
    ]
    const [isOpen, setIsOpen] = useState(false)

    async function onSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)
        // console.log(formData)
        const response = await fetch('/api/send', {
            method: 'POST',

            body: formData,
        })

        // Handle response if necessary
        const data = await response.json()
        // ...
    }

    return (
        <div dir={"rtl"} className={"min-h-screen w-full bg-white"}>




            {/*<Head>*/}

            {/*    <meta name='robots' content='noindex'/>*/}
            {/*</Head>*/}
            {/*Google Tag Manager*/}

            {/*End Google Tag Manager*/}



            <div
                className={"lg:block hidden sticky top-0  bg-white z-999 transform  border-b border-black border-opacity-[12%]"}>
                <div className={"container mx-auto"}>
                    <div className={"flex justify-between items-center h-[72px] "}>
                        <div className={"ml-6 w-[150px] relative"}>
                            <Image width={966} height={297} layout={"responsive"} src={"/logo.svg"} alt={"logo"}/>
                        </div>
                        <div>
                            <ul className={"flex items-center flex-grow"}>
                                {menu.map((item, i) => <li key={i}>
                                    <a href={item.href}
                                       className={"flex text-title-medium font-medium items-center h-[40px] py-4 px-4 text-zinc-900"}>
                                        {item.title}
                                    </a>
                                </li>)}
                            </ul>
                        </div>
                        <a href={"#1"} id={"header-demo-request-button"} className={"text-white flex items-center text-label-large font-medium h-[40px] px-6 rounded-full bg-primary-brand"}>
                            درخواست دمو رایگان
                        </a>
                    </div>
                </div>
            </div>
            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog onTouchMove={() => {
                    setIsOpen(false)
                }} as="div" className="absolute inset-0 flex z-999 overflow-hidden" onClose={setIsOpen}>

                    <Dialog.Overlay className="fixed bg-black bg-opacity-[70%] inset-0"/>

                    <div dir={"rtl"} className="fixed inset-y-0 w-[360px]  right-0  flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="ttransform transition duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >

                            <div
                                className="h-full relative w-[360px] flex flex-col rounded-l-2xl py-3 bg-white shadow-xl overflow-y-scroll">
                                <div className={`relative flex-1 px-3`}>
                                    <Icon onClick={() => setIsOpen(false)} className={"text-black mb-2 ml-1 group"}>
                                        menu_open
                                    </Icon>


                                    <div>
                                        <ul className={" items-center flex-grow"}>
                                            {menu.map((item, i) => <li key={i}>
                                                <a onClick={()=>setIsOpen(false)} href={item.href}
                                                   className={"flex text-title-medium font-medium items-center h-[40px] py-4 px-4 text-zinc-900"}>
                                                    {item.title}
                                                </a>
                                            </li>)}
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </Transition.Child>
                    </div>

                </Dialog>
            </Transition.Root>
            <div
                className={"lg:hidden block sticky top-0  bg-white z-999 transform  border-b border-black border-opacity-[12%]"}>
                <div className={"container mx-auto"}>
                    <div className={"flex lg:justify-between items-center h-[64px] md:h-[72px] "}>
                        <button onClick={() => setIsOpen(true)}
                                className={"flex items-center text-white justify-center rounded-full w-[48px] h-[48px] hover:bg-black/[4%]"}>
                            <Icon className={"text-black"}>
                                menu
                            </Icon>
                        </button>
                        <div className={"mr-4 lg:mr-0 ml-6 w-[80px] md:w-[120px] lg:w-[150px] relative"}>
                            <Image width={966} height={297} layout={"responsive"} src={"/logo.svg"} alt={"logo"}/>
                        </div>
                        {/*<div>*/}
                        {/*    <ul className={"flex items-center flex-grow"}>*/}
                        {/*        {menu.map((item, i) => <li key={i}>*/}
                        {/*            <a href={item.href} className={"flex text-title-medium font-medium items-center h-[40px] py-4 px-4 text-zinc-900"}>*/}
                        {/*                {item.title}*/}
                        {/*            </a>*/}
                        {/*        </li>)}*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        <a href={"#1"} id={"header-demo-request-button"}
                            className={"flex items-center justify-center text-white mr-auto lg:mr-0 text-label-large font-medium h-[40px] px-6 rounded-full bg-primary-brand"}>
                            درخواست دمو رایگان
                        </a>
                    </div>
                </div>
            </div>

            <section className={"w-full relative bg-primary-brand py-12 pb-0  md:py-24"}>
                <div className={"md:absolute md:block hidden -left-[40px] bottom-0 w-10/12 md:w-6/12"}>
                    <Image  height={720} width={960} layout={"responsive"} src={"/head-hero-section.png"}/>
                </div>
                <div className={"container mx-auto"}>
                    <h1 className={"text-white max-w-4xl font-black text-display-small md:text-display-medium"}>
                        20%
                        تخفیف
                        ویژه
                        <span className={"block text-white/[90%] font-bold"}>
                     به مناسبت ۲۰ سالگی

                        </span>
                        <span className={"font-black block text-white"}>
                            IBSng
                        </span>
                    </h1>
                    <h2 className={"text-title-large md:text-headline-small font-normal text-white/[90%] mt-4 md:mt-8"}>
                        <span className={"inline-flex mx-2 text-white font-bold"}>
                        امنیت
                            </span>
                        و
                        <span className={"inline-flex mx-2 text-white font-bold"}>
                        کارایی
                        </span>
                        شبکه خود را با
                        <span className={"mx-2 text-white font-bold"}>
                        IBSng
                        </span>
                        افزایش دهید
                        ...
                    </h2>
                    <div
                        className={"lg:max-w-2xl md:max-w-sm lg:space-x-reverse mt-3 text-justify lg:flex lg:space-x-6 items-center"}>
                        <p className={"lg:max-w-2xl font-normal lg:mb-0 mb-4 text-body-large md:text-body-large text-white/[80%]"}>
                            IBSng ابزار مورد نیاز برای مدیریت و نظارت بر کاربران و ترافیک شبکه داخلی سازمان را در اختیار
                            شما
                            قرار می‌دهد. با تعیین محدوده سرعت، پهنای باند و حجم مصرفی هر کاربر، کیفیت دسترسی به اینترنت
                            سازمان را برای پرسنل خود تضمین کرده و عملکرد شبکه را بهینه کنید.
                        </p>
                        <p className={"lg:max-w-2xl font-normal text-body-large md:text-body-large text-white/[80%]"}>
                            این نرم‌افزار برای شناسایی و مدیریت رفتار مخاطره‌آمیز از سمت کاربران شبکه توسعه داده شده است. در صورت بروز مشکل امنیتی، شما و افراد مسئول در برابر امنیت شبکه قادر خواهید بود به سرعت کاربر منشا حمله را شناسایی و از پیامدهای آن جلوگیری کنید.
                        </p>
                    </div>
                    <a href={"#1"} id={"top-section-demo-form-button"}
                        className={"flex w-fit items-center text-primary-brand  mt-6   border  bg-white h-[40px] pr-6 pl-4 rounded-full"}>
                        IBSNG را در سازمان خود تجربه کنید
                        <Icon className={"mr-2"}>
                            arrow_back
                        </Icon>
                    </a>

                </div>
                <div className={"md:absolute md:hidden block -left-[40px] bottom-0 w-10/12 md:w-6/12"}>
                    <Image  height={720} width={960} layout={"responsive"} src={"/head-hero-section.png"}/>
                </div>
            </section>
            <section id={"1"} className={"w-full bg-white pb-6 md:pb-16 pt-12 md:pt-32"}>

                <div className={"container mx-auto"}>
                    <div className={"grid grid-cols-12 gap-4"}>
                        <div className={"col-span-12 md:col-span-6 lg:col-span-7"}>
                            <h2 className={"text-right text-zinc-900 text-title-large md:text-headline-large font-extrabold"}>
                                چرا نرم‌افزار اکانتینگ IBSng؟
                            </h2>
                            <div className={"grid grid-cols-2 mt-12 gap-4 max-w-2xl"}>
                                {whyUS.map((item, i) => <div key={i} className={"hover:transform hover:-translate-y-[10px] transition-all duration-300 shadow-[0px_1px_4px_rgba(0,0,0,0.2)] bg-white border border-black/[12%] rounded-[8px]  px-6 py-6 col-span-1"}>
                                    <Icon className={"text-[36px] text-primary-brand"}>
                                        {item.icon}
                                    </Icon>
                                    <h4 className={" text-[18px] text-zinc-800"}>
                                        {item.title}
                                    </h4>
                                </div>)}
                            </div>
                        </div>
                        <div id={"demo-form"} className={"lg:col-span-5 md:col-span-6  col-span-12 md:mt-0 mt-4"}>
                            <div className={"w-full p-6 rounded-[12px] shadow-[0px_1px_4px_rgba(0,0,0,0.2)]"}>
                                <h3 className={"mt-2 text-right md:text-center text-headline-small font-bold text-zinc-900"}>
                                    فرم درخواست دمو رایگان
                                </h3>
                                <p className={"text-zinc-700 text-body-large mt-2"}>
                                    برای درخواست دمو و کسب اطلاعات بیشتر فرم زیر را تکمیل
                                    کنید.
                                </p>
                                <form method={"POST"} action={"/api/send"}
                                      className={"grid mb-2 mt-4 grid-cols-2 gap-4"}>
                                    <div className={"md:col-span-1 col-span-2 relative"}>
                                        <Icon
                                            className={"text-zinc-500 right-4 absolute top-1/2 transform -translate-y-1/2"}
                                            type={"outline"}>
                                            badge
                                        </Icon>
                                        <input id={"name"} required name={"name"} placeholder={"نام"}
                                               className={"placeholder-zinc-500 text-zinc-900 outline-none bg-background py-4 pl-4 pr-12 rounded-[8px] w-full"}/>
                                    </div>
                                    <div className={"md:col-span-1 col-span-2 relative"}>
                                        <Icon
                                            className={"text-zinc-500 right-4 absolute top-1/2 transform -translate-y-1/2"}
                                            type={"outline"}>
                                            source_environment
                                        </Icon>
                                        <input id={"company-name"} required name={"company"} placeholder={"نام شرکت"}
                                               className={"placeholder-zinc-500 text-zinc-900 outline-none bg-background py-4 pl-4 pr-12 rounded-[8px] w-full"}/>
                                    </div>
                                    <div className={"col-span-2 relative"}>
                                        <Icon
                                            className={"text-zinc-500 right-4 absolute top-1/2 transform -translate-y-1/2"}
                                            type={"outline"}>
                                            phone
                                        </Icon>
                                        <input id={"phone-number"} required name={"phone"} placeholder={"شماره تماس"}
                                               className={"placeholder-zinc-500 text-zinc-900 outline-none bg-background py-4 pl-4 pr-12 rounded-[8px] w-full"}/>
                                    </div>
                                    <div className={"col-span-2 relative"}>
                                        <Icon
                                            className={"text-zinc-500 right-4 absolute top-1/2 transform -translate-y-1/2"}
                                            type={"outline"}>
                                            email
                                        </Icon>
                                        <input id={"email"} type={"email"} name={"email"} placeholder={"ایمیل"}
                                               className={"placeholder-zinc-500 text-zinc-900 outline-none bg-background py-4 pl-4 pr-12 rounded-[8px] w-full"}/>
                                    </div>
                                    <div className={"col-span-2 flex justify-end"}>
                                        <button id={"demo-form-submit"} type={"submit"}
                                                className={"h-[40px] text-white px-6 bg-primary-brand rounded-full"}>
                                            ثبت درخواست دمو
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id={"2"} className={"w-full bg-white pb-6 md:pb-16 pt-10 md:pt-20"}>

                <div className={"container mx-auto"}>
                    <h2 className={"text-right md:text-center text-zinc-900 text-title-large md:text-headline-large font-extrabold"}>
                        مزایای استفاده از نرم افزار اکانتینگ IBSng
                    </h2>

                    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14 "}>

                        {featureSection.map((item, i) => <div key={i}
                                                              className={"hover:bg-primary-brand group border border-black/[12%] transition-all duration-300 ease-in-out hover:shadow-[0_10px_40px_0_rgba(0,0,0,0.1)] shadow-[0_10px_40px_0_rgba(0,0,0,0.05)] bg-white px-6 py-6 hover:rounded-[16px]  rounded-[24px]"}>

                            <Icon type={"fill"}
                                  className={"mb-4  text-[32px] group-hover:text-white text-primary-brand"}>
                                {item.icon}
                            </Icon>
                            <h2 className={"text-zinc-800 group-hover:text-white text-title-medium font-bold"}>
                                {item.title}
                            </h2>
                            <p className={"text-label group-hover:text-white/[90%] mt-3 text-body-large"}>
                                {item.description}
                            </p>
                        </div>)}

                    </div>
                </div>
            </section>
            <section id={"3"} className={"w-full bg-white pt-10 pb-6 md:pb-16 md:pt-20"}>
                <div className={"container mx-auto"}>
                    <h2 className={"text-right md:text-center text-zinc-900 text-title-large md:text-headline-large font-extrabold"}>
                        چه مجموعه‌هایی به اکانتینگ نیاز دارند؟
                    </h2>

                    <div className={"grid lg:max-w-6xl mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-6 md:gap-6 mt-10"}>

                        {whichOneUseAccountingAppAnswers.map((item, i) =>
                            <div className={"relative"} key={i}>
                                <div className={"mb-4"}>
                                    <Image className={"rounded-[8px]"} objectFit={"cover"} height={840} width={1280}
                                           layout={"responsive"} src={item.image}/>
                                </div>
                                <h4 className={"w-full rounded-t-[8px] absolute top-0 py-4 px-4 backdrop-blur-[8px] bg-white/[70%] text-center text-zinc-900 font-bold"}>
                                    {item.title}
                                </h4>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <section id={"4"} className={"w-full bg-white pt-10 pb-6 md:pb-16 md:pt-20"}>
                <div className={"container mx-auto"}>
                    <h2 className={" mb-6 text-center text-zinc-900 text-title-large md:text-headline-large font-bold"}>
                        بیش از
                        <span className={"inline-flex text-primary-brand mx-2"}>
                        1000
                            </span>
                        برند معتبر به
                        <span className={"inline-flex text-primary-brand mx-2"}>
                        پارس پویش
                        </span>
                        اعتماد کرده‌اند
                    </h2>

                    {/*<div*/}
                    {/*    className={"bg-white py-6 px-6  overflow-hidden  h-[200px] mt-12 border border-black/[12%] rounded-[24px] shadow-[0_10px_40px_0_rgba(0,0,0,0.05)]"}>*/}
                    {/*    <div className={"h-full marquee whitespace-nowrap overflow-y-hidden overflow-x-scroll"}>*/}
                    {/*        {primaryLogo.map((item, i) =>*/}
                    {/*            <div*/}
                    {/*                className={"relative items-center justify-center inline-flex ml-10 w-[164px] h-full"}*/}
                    {/*                key={i}>*/}
                    {/*                <Image objectFit={"contain"} layout={"fill"} alt={"i"} src={"/img/" + item.img}/>*/}
                    {/*            </div>*/}
                    {/*        )}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className={"md:flex px-2 space-x-reverse md:space-x-6 md:relative justify-between items-center"}>

                        <div
                            className={"z-10 w-full md:w-6/12 mt-12 rounded-[24px]"}>
                            <h2 className={"text-title-large text-center md:text-right text-zinc-900 font-bold mb-4"}>
                                سازمان‌ها و دستگاه‌های دولتی

                            </h2>
                            <Image height={4722} width={4240} layout={"responsive"} src={"/partnership-logos.png"}/>
                            {/*<div className={"h-full  grid grid-cols-4 md:grid-cols-8 gap-2"}>*/}
                            {/*    {primaryLogo.map((item, i) =>*/}
                            {/*            i < 8 && <div*/}
                            {/*                className={"relative  ml-10 w-full h-[70px] md:h-[120px]"}*/}
                            {/*                key={i}>*/}
                            {/*                <Image objectFit={"contain"} layout={"fill"} alt={"i"} src={"/img/" + item.img}/>*/}
                            {/*            </div>*/}
                            {/*    )}*/}
                            {/*</div>*/}
                            {/*<div className={"h-full  grid grid-cols-4 md:grid-cols-8 gap-2"}>*/}
                            {/*    {primaryLogo.map((item, i) =>*/}
                            {/*            (i >= 8 && i < 15) && <div*/}
                            {/*                className={"relative  ml-10 w-full h-[70px] md:h-[120px]"}*/}
                            {/*                key={i}>*/}
                            {/*                <Image objectFit={"contain"} layout={"fill"} alt={"i"} src={"/img/" + item.img}/>*/}
                            {/*            </div>*/}
                            {/*    )}*/}
                            {/*</div>*/}
                            {/*<div className={"h-full  grid grid-cols-4 md:grid-cols-8 gap-2"}>*/}
                            {/*    {primaryLogo.map((item, i) =>*/}
                            {/*            (i >= 15 && i < 21) && <div*/}
                            {/*                className={"relative  ml-10 w-full h-[70px] md:h-[120px]"}*/}
                            {/*                key={i}>*/}
                            {/*                <Image objectFit={"contain"} layout={"fill"} alt={"i"} src={"/img/" + item.img}/>*/}
                            {/*            </div>*/}
                            {/*    )}*/}

                            {/*</div>*/}
                            {/*<div className={"h-full  grid grid-cols-4 md:grid-cols-8 gap-2"}>*/}
                            {/*    {primaryLogo.map((item, i) =>*/}
                            {/*            (i >= 21 && i < 26) && <div*/}
                            {/*                className={"relative  ml-10 w-full h-[70px] md:h-[120px]"}*/}
                            {/*                key={i}>*/}
                            {/*                <Image objectFit={"contain"} layout={"fill"} alt={"i"} src={"/img/" + item.img}/>*/}
                            {/*            </div>*/}
                            {/*    )}*/}
                            {/*</div>*/}
                        </div>
                        <div className={"w-full z-20 py-4 md:w-fit md:py-0 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2  block justify-center"}>
                            <div className={"z-20 opacity-[85%] block w-[180px] mb-6 h-[60px] mx-auto relative"}>
                                <Image objectFit={"contain"} layout={"fill"} src={"/logo.svg"}/>
                            </div>
                            <a href={"#1"} id={"our-partnership-demo-button"}
                               className={"flex z-20 items-center justify-center  text-white font-medium text-label-large lg:text-body-large rounded-full px-6 h-[40px] lg:px-8 lg:h-[48px] bg-primary-brand"}>

                                به همراهان پارس پویش بپیوندید

                            </a>
                        </div>
                        <div dir={"ltr"}
                             className={"w-full z-10  md:w-6/12 mt-12 rounded-[24px] "}>
                            <h2 className={"text-title-large text-center md:text-left text-zinc-900 font-bold mb-4"}>
                                شرکت‌های کوچک و متوسط
                            </h2>
                            <Image width={3608} height={4122} layout={"responsive"} src={"/partnership-logos-2.png"}/>
                        </div>
                    </div>

                </div>
            </section>
            <section id={"5"}
                     style={{backgroundImage: "linear-gradient(75deg, rgb(255, 240, 237) 0%, rgb(255, 240, 237) 60%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 100%)"}}
                     className={"md:mt-20 mt-10  w-full bg-white relative "}>
                <div className={"container  mx-auto"}>
                    <div className={"grid grid-cols-12 gap-4"}>
                        <div className={"lg:col-span-6 md:col-span-5 col-span-12"}>
                            <Image height={1024} width={1280} type={"responsive"} src={"/bg-1.png"}/>
                        </div>
                        <div
                            className={"col-span-12 lg:col-span-6 md:col-span-7 pb-14 pt-0 md:py-32 md:pr-10 lg:pr-0 pr-0"}>
                            <h2 className={"text-primary-brand text-headline-large font-extrabold"}>
                                شرایط ویــــــــــــــژه خرید IBSng
                            </h2>
                            <p className={"text-body-large font-medium text-zinc-900 mt-4"}>
                                پارس پویش به مناسبت 20 سالگی خود، تسهیلات ویژه‌ای را برای شرکت‌ها و سازمان‌ها در نظر
                                گرفته است. برای بهره‌مندی از این شرایط ویژه همین الان اقدام کنید!
                            </p>
                            <div
                                className={"mt-6 text-white  text-center lg:pl-12 lg:space-x-reverse lg:space-x-4 grid gap-4 lg:gap-0 grid-cols-2 lg:flex"}>
                                <div
                                    className={"bg-primary-brand flex items-center justify-center px-4 py-3 font-bold text-title-medium col-span-1 w-full lg:w-3/12 h-[140px] rounded-[8px]   border-primary-brand"}>
                                    20% تخفیف اکانتینگ IBSng
                                </div>
                                <div
                                    className={"bg-primary-brand flex items-center justify-center px-4 py-3 font-bold text-title-medium col-span-1 w-full lg:w-3/12 h-[140px] rounded-[8px] border-primary-brand"}>
                                    3 ماه پشتیبانی رایگان

                                </div>
                                <div
                                    className={"bg-primary-brand flex items-center justify-center px-4 py-3 font-bold text-title-medium col-span-1 w-full lg:w-3/12 h-[140px] rounded-[8px] border-primary-brand"}>
                                    ٪۲۰ تخفیف ماژول‌های تکمیلی

                                </div>
                                <div
                                    className={"bg-primary-brand flex items-center justify-center px-4 py-3 font-bold text-title-medium col-span-1 w-full lg:w-3/12 h-[140px] rounded-[8px]   border-primary-brand"}>
                                    نصب، استقرار و آموزش رایگان

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/*<section className={"w-full bg-white pt-20 pb-8"}>*/}
            {/*    <div className={"max-w-6xl mx-auto"}>*/}
            {/*        <div className={"flex items-center rounded-full border border-black/[12%]"}>*/}
            {/*            <div className={"relative w-[297px] h-[298px] ml-16"}>*/}
            {/*                <Image alt={"f"} objectFit={"cover"} layout={"fill"} src={"/logo-p.png"}/>*/}
            {/*            </div>*/}
            {/*            <div className={"pl-10 w-7/12 "}>*/}
            {/*                <h3 className={"font-bold mb-2 text-title-large text-zinc-900"}>*/}
            {/*                     <span className={"text-primary-brand ml-2"}>*/}
            {/*                    IBSng*/}
            {/*                     </span>*/}
            {/*                    محصولی بومی از شرکت*/}
            {/*                    <span className={"text-primary-brand mr-2"}>*/}
            {/*                    پارس پویش فن‌آور*/}
            {/*                        </span>*/}
            {/*                </h3>*/}
            {/*                <p className={"text-body-large text-zinc-700  "}>*/}
            {/*                    پارس پویش فن‌آور یک شرکت دانش‌بنیان پیشگام در بازار امنیت شبکه در لایه اوپراتورهای*/}
            {/*                    مخابراتی*/}
            {/*                    و*/}
            {/*                    سازمان‌ها در ایران است؛ بیش از دو دهه است که پارس پویش توانسته با تکیه بر دانش و تلاش*/}
            {/*                    مهندسان*/}
            {/*                    جوان ایرانی، در این مسیر همراه و مشاور مشتریان خود باشد. پارس پویش مصمم است در آینده نیز*/}
            {/*                    به*/}
            {/*                    فناور بودن خود ببالد و به پیشرفت و نوآوری در صنعت آی‌تی کشور کمک کند.*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <p className={"text-label-large text-zinc-600 text-center mt-3"}>*/}
            {/*            ©*/}
            {/*            حق کپی رایت این صفحه برای شرکت پارس پویش فن‌آور محفوظ است. 2024*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <footer className={"text-right md:text-center"}>
                <div className={"bg-primary-brand py-4 "}>
                    <div className={"container mx-auto"}>
                        <div className={"flex justify-center items-center"}>
                            {/*<div className={"md:w-[170px] w-[100px]"}>*/}
                            {/*    <Image width={966} height={297} layout={"responsive"} src={"/logo-white.png"}*/}
                            {/*           alt={"logo"}/>*/}
                            {/*</div>*/}
                            <a href={"#1"} id={"footer-demo-request"}
                                className={"flex items-center font-bold px-8 rounded-full text-body-large h-[48px] bg-white text-primary-brand "}>

                                دریافت دمو رایگان

                            </a>

                        </div>
                    </div>
                </div>
                <div className={"relative bg-white py-10 md:py-20"}>
                    <div className={"text-zinc-900 container mx-auto"}>
                        <h4 className={"md:text-title-large text-title-medium font-bold"}>
                            IBSng محصولی بومی از شرکت پارس پویش فن‌آور
                        </h4>
                        <p className={"text-body-large mx-auto max-w-4xl mt-3"}>
                            پارس پویش فن‌آور یک شرکت دانش‌بنیان پیشگام در بازار امنیت شبکه در لایه اوپراتورهای مخابراتی
                            و سازمان‌ها در ایران است؛ بیش از دو دهه است که پارس پویش توانسته با تکیه بر دانش و تلاش
                            مهندسان جوان ایرانی، در این مسیر همراه و مشاور مشتریان خود باشد. پارس پویش مصمم است در آینده
                            نیز به فناور بودن خود ببالد و به پیشرفت و نوآوری در صنعت آی‌تی کشور کمک کند.
                        </p>
                        <p className={"md:absolute bottom-4 transform md:-translate-x-1/2 md:left-1/2 mt-3 text-primary-brand"}>
                            ©
                            حق کپی رایت این صفحه برای شرکت پارس پویش فن‌آور محفوظ است. 2024
                        </p>
                    </div>

                </div>
            </footer>

        </div>

    )
}
