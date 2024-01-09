import Icon from "@/components/Icon";

export default function Success(){
    return(
        <div className={"h-screen w-full bg-background flex items-center justify-center"}>
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