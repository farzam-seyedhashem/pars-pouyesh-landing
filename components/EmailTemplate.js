import * as React from 'react';

export const EmailTemplate = ({reqData}) => {
   return <div style={{width:"100%",display:"flex", justifyContent:"center", alignItems:"center",height:"100vh"}}><div style={{width:"20%",borderRadius:"8px", padding:8, background:"#fff",fontSize: 16,border:"1px solid rgba(0,0,0,.12)"}} dir={"rtl"}>
        <h3 >
            نام :
            {reqData.name}
        </h3>
       <h3>
           اسم شرکت :
           {reqData.company}
       </h3>
       <h3>
           شماره تلفن :
           {reqData.phone}
       </h3>
       <h3>
           ایمیل :
           {reqData.email}
       </h3>
    </div></div>
}