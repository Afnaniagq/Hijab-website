import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LuMenuSquare } from "react-icons/lu";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

function Header(){
    return(
      <header className="bg-slate-950 h-20">
      <div  className="max-w-7xl  px-4 md:px-6 lg:px-8  ">
          {/* <div   className="flex items-center justify-between h-16"> */}
              {/* <div  className="flex items-center"> */}
                 <div className="">
                     <div className="flex ">
                     <Image     src="/logo.png" alt="hijab" width={200} height={200}  className="size-[85px] fill-slate-200"></Image> 
                     <h2 className="text-white text-[20px] mt-12 font-semibold mr-12 hover:translate-x-4 `duration-&lsqb;2.1s&rsqb;`">Hijab Corner</h2>
                  
<div className="flex items-end ml-auto mb-3">
                   
            <ul className="hidden md:block   ">
            <li  className="space-x-12 text-[28px] text-white font-serif ">
            <Link href="/" className="hover:text-slate-700 hover:bg-white rounded-md " >Home</Link>
            <Link href="/about" className="hover:text-slate-700 hover:bg-white rounded-md ">About</Link>
            <Link href="/contact" className="hover:text-slate-700 hover:bg-white rounded-md ">Contact</Link>
            </li>
            </ul>
            </div>
            <Sheet>
      <SheetTrigger><LuMenuSquare  className=" md:hidden size-12 mx-2 fill-white" /></SheetTrigger>
        <SheetContent >
          <h2 className="pl-4 text-[25px] font-serif space-y-4 text-slate-700 font-bold ">List</h2>
          <div className="bg-red-500 h-[2px] w-[390px] mb-3"></div>
          <ul className="">
            <li  className="space-y-6 pl-4 text-[25px]  text-slate-700 font-serif flex flex-col">
            <Link href="/" className="hover:text-slate-700 " >Home</Link>
            <Link href="/about" className="hover:text-slate-700 ">About</Link>
            <Link href="/contact" className="hover:text-slate-700 ">Contact</Link>
            </li>
            </ul>
              </SheetContent>
      </Sheet>
            </div>     

      </div>
      </div>
            </header>

    )
}
export default Header
 
 
 
 
 
 
 
 
 
