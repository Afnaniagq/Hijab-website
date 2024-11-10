import Link from "next/link";
import Image from "next/image";
import React from "react";

function Header(){
    return(
    
        <header className="bg-black p-3">
         <div  className="max-w-7xl mx- px-4 sm:px-6 lg:px-8">
             <div   className="flex items-center justify-between h-16">
                 <div  className="flex items-center">
                    <div className="flex-shrink-0">
                        <a href="" className="flex flex-row">
                        <Image     src="/logo.png" alt="hijab" width={200} height={200}  className="size-[100px]  fill-slate-200"></Image> 
                        <h2 className="text-white text-[20px] mt-12 font-semibold mr-12 hover:translate-x-4 duration-[2s]">Hijab Corner</h2>
                        </a>
          </div>
            </div>
                    <div  className="ml-4 flex  justify-items-center j justify-self-center  space-x-4">
                     <Link href="/" className="text-white round-lg p-2 text-[20px] f hover:bg-white rounded-lg font-semibold hover:text-black ">Home</Link>
                     <Link href="/about" className="text-white round-lg p-2 text-[20px] font-semibold hover:bg-white rounded-lg hover:text-black">About</Link>
                     <Link href="/contact" className="text-white round-lg p-2 text-[20px] font-semibold hover:bg-white rounded-lg hover:text-black">Contact</Link>
            </div>

            
          
          </div>
          </div>
        </header>
     );
};
export default Header
       