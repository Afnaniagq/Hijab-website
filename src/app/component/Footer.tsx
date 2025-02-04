import React from "react";




export default function Footer(){
    return(
<section className="bg-slate-950 size-auto grid lg:grid-row-auto flex-wrap">
<h1 className="text-[20px] md:text-[30px] lg:text-[40px] font-bold text-center py-[40px] text-white">Information</h1>
<div className="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-[40%_auto] gap-[30px] flex-wrap">
  <div className="flex gap-15px mb-12  text-white" >
   <ul className="ml-16  md:ml-8">
 <li className="text-[20px]  font-bold font-mono  hover:text-blue-600">FOLLOW US</li>
 <li  >Who we are</li>
 <li  >Return & Exchange Policy</li>
 <li  >Order Placement & Confirmation</li>
 <li  >Shipping & Delivery Policy</li>
 <li  >Privacy Policy </li>
 <li >Terms and Conditions</li>
 <li>FAQs</li> 
 </ul>
 
 

  </div>
  
  <div  className="md:order-2 order-1 p-[20px] ">
 
  <h2 className=" text-15px] md:text-[20px]  font-bold py-[15px] px-[30px] pl-20 text-end text-white hover:text-bold">Subscribe now to be the first to know about our promotional offers!</h2>
  <p className=" text-[15px] md:text-[20px] text-white hover:text-blue-600 font-mono  mt-20">Copyright © 2024, HijabCorner </p>
</div>
</div>
</section>
    )
}