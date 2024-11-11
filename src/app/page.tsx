import Image from "next/image";


      function Homepage(){
        return(
          <main>
 
        <section>
      <div  className="basis-[45%] md:order-2 order-1 p-[5px] group">
     
  <Image     src="/top.webp" alt="hijab" width={1500} height={1200} className="hover:scale-95  border-black duration-[3s] hover:translate-y-[10px] " ></Image> 
            
          </div>
         </section>
          <section className="bg-white lg:py-[80px] sm:py-[50px] py-[30px] px-[20px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex md:flex-row flex-col">
          <div className="basis-[55%] md:order-1 order-2">
            <p className="text-[18px] font-serif">Effortless Style with Our Instant Hijab</p>
            <h1 className="font-bold lg:text-[50px] text-[25px] py-[30px]  hover:text-slate-700 hover:translate-x-1 duration-[2s]">HIJAB ACCESSORIESUnbeatable & Graceful Style</h1>
            <p className="text-[18px]">Welcome to Rosh&apos; your source for modern Islamic lifestyle products rooted in faith and integrity. Discover our collection of modest fashion&apos; hijabs and home essentials crafted with care&apos; ethics&apos; and a commitment to Islamic values.</p>
            <div className="flex gap-[30px] py-[30px] sm:justify-start justify-center">
              <button className="bg-slate-800 text-white md:p-[15px_32px] p-[10px_28px] rounded-[12px] hover:bg-red-300   hover shadow-lg hover:text-black hover:scale-125 duration-[0.5s]">Explore</button>
              <button  className="bg-slate-800 text-white md:p-[15px_32px] p-[10px_28px] rounded-[12px] hover:bg-red-300 hover shadow-lg hover:text-black hover:scale-125 duration-[0.5s]">Shop Now</button>
            </div>
          </div>
          <div  className="basis-[45%]  rounded-lg md:order-2 order-1 p-[20px] group">
            <Image className="hover:translate-y-7 duration-[2s] rounded-xl border-black"   src="/scarf.jpg" alt="hijab" width={550} height={500}></Image>
            
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto">
          <h2 className="text-center text-bold font-bold hover:text-[#C3A275] text-[30px] p-[15px] "> ABAYA&apos;S _ HIJAB</h2>
        <div className="flex flex-wrap ">
          <div className="basis-[30%] m-[1.5%] shadow-lg  py-[20px] text-center group hover:translate-y-[17px]">
          <Image src="/abayo.webp" alt="pic" width={370} height={370}
            className="w-[45] h-[40] mx-auto group-hover:scale-[1.1]"></Image>
            <h2 className="text-[22px] font-bold py-[15px] group-hover:pt-9  hover:text-[#C3A275] ">ABYAS</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-y-[17px] ">
            <Image src="/kid.webp" alt="pic" width={370} height={370}
            className=" w-[45] h-[40] mx-auto group-hover:scale-[1.1]"/>
            <h2 className="text-[22px] font-bold py-[15px]  group-hover:pt-9  hover:text-[#C3A275] ">KID&apos;S ABAYAS</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center  group hover:translate-y-[17px]  ">
            <Image src="/purple.webp" alt="pic" width={350} height={350}
            className="w-[45] h-[40] mx-auto  group-hover:scale-[1.1]"/>
            <h2 className="text-[22px] font-bold py-[15px]  group-hover:pt-9  hover:text-[#C3A275] ">PARTY WEAR</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center  group hover:translate-y-[17px] ">
            <Image src="/maxi.webp" alt="pic" width={370} height={370}
            className="w-[45] h-[40] mx-auto  group-hover:scale-[1.1]"/>
            <h2 className="text-[22px] font-bold py-[15px] group-hover:pt-9  hover:text-[#C3A275] ">MAXI ABAYA</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-y-[17px]">
            <Image src="/Oyoon.webp" alt="pic" width={350} height={350}
            className="w-[45] h-[40] mx-auto group-hover:scale-[1.1]"/>
            <h2 className="text-[22px] font-bold py-[15px] group-hover:pt-9  hover:text-[#C3A275] ">FANCY WEAR</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px]   text-center group hover:translate-y-[17px] ">
            <Image src="/brownhijab.webp" alt="pic" width={370} height={370}
            className="w-[45] h-[40] mx-auto group-hover:scale-[1.1]"/>
            <h2 className="text-[22px] font-bold py-[15px]  group-hover:pt-9  hover:text-[#C3A275] ">HIJAB WEAR</h2>
          </div>
        </div>
      </div>
      {/* </section>
      <section className="bg-white lg:py-[80px] sm:py-[50px] py-[30px] px-[20px]"> */}
      <div className="max-w-[1320px] mx-auto ">
          <h2 className="text-center text-bold font-bold hover:text-[#C3A275] text-[30px] p-[15px] ">PINS _ BROACH</h2>
        <div className="flex flex-wrap ">
          <div className="basis-[30%] m-[1.5%] shadow-lg  py-[20px] text-center group hover:translate-y-[17px] duration-[2s] ">
            <Image src="/bluepin.webp" alt="pic" width={400} height={400}
            className="w-[45] h-[40] mx-auto group-hover:scale-100 "/>
            <h2 className="text-[22px] font-bold py-[15px]   hover:text-[#C3A275]">TUSPINS</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-y-[17px]  duration-[2s]">
            <Image src="/bruch.jpg" alt="pic" width={400} height={400}
            className=" w-[45] h-[40] mx-auto group-hover:scale-100"/>
            <h2 className="text-[22px] font-bold py-[15px]    hover:text-[#C3A275]">SPHERICAL-COIL PINS</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center  group hover:translate-y-[17px]  duration-[2s] ">
            <Image src="/pinkpin.webp" alt="pic" width={400} height={400}
            className="w-[45] h-[40] mx-auto  group-hover:scale-100"/>
            <h2 className="text-[22px] font-bold py-[15px]    hover:text-[#C3A275]">BALL TUSPINS</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center  group hover:translate-y-[17px]  duration-[2s]">
            <Image src="/silver.webp" alt="pic" width={400} height={400}
            className="w-[45] h-[40] mx-auto  group-hover:scale-100"/>
            <h2 className="text-[22px] font-bold py-[15px]   hover:text-[#C3A275]">SILVER HIJAB PIN</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-y-[17px] duration-[2s]">
            <Image src="/moonlight.webp" alt="pic" width={400} height={400}
            className="w-[45] h-[40] mx-auto group-hover:scale-100"/>
            <h2 className="text-[22px] font-bold py-[15px]   hover:text-[#C3A275]">MOONLIGHT PIN</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px]   text-center group hover:translate-y-[17px]  duration-[2s]">
            <Image src="/blue-magnet.webp" alt="pic" width={400} height={400}
            className="w-[45] h-[40] mx-auto group-hover:scale-100"/>
            <h2 className="text-[22px] font-bold py-[15px]    hover:text-[#C3A275]">BLUE MAGNET PIN</h2>
          </div>
        </div>
      </div>
      <section className="py-10 grid grid-row-auto flex-wrap">
        <div  className="flex md:flex-row flex-col">
        <div className="basis-[45%] md:order-1 order-2 p-[20px] group">
          <h2 className="font-bold lg:text-[32px] text-[25px] py-[35px] underline underline-offset-8 hover:text-[#C3A275]">Elevate your style with classy hijabs
          </h2>
          <p className="font-serif text-[20px] pt-[50px] text-center ">Wearing a hijab pleases Allah greatly and you shall be rewarded with the best and the greatest of things in this life and the hereafter</p>
        <Image src="/sider.webp" alt="abaya" width={550} height={550} className="basis-40 duration-[2.1s] hover:translate-x-[17px] pt-16 pb-5"></Image>
    </div>
    <div  className="basis-[55%] md:order-2 order-1 px-[50px]">
        <Image src="/abayas.jpeg" alt="abaya" width={600} height={1000} className= "basis-40 duration-[2.1s] hover:translate-y-[17px]  pb-5" ></Image>
        </div>
          </div>
          <div className="max-w-[1320px] mx-auto">
          <h2 className="text-center text-bold font-bold hover:text-[#C3A275] text-[30px] p-[15px] ">ESSENTIALS</h2>
        <div className="flex flex-wrap ">
          <div className="basis-[30%] m-[1.5%] shadow-lg  py-[20px] text-center group hover:translate-y-[17px]  duration-[2s]">
            <Image src="/cap.webp" alt="pic"  width={280} height={280}
            className="w-[45] h-[40] mx-auto group-hover:scale-100"/>
            <h2 className="text-[22px] font-bold py-[15px]  hover:text-[#C3A275] ">UNDER SCARF</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-y-[17px]  duration-[2s]">
            <Image src="/Black.webp" alt="pic"  width={280} height={280}
            className=" w-[45] h-[40] mx-auto group-hover:scale-100"/>
            <h2 className="text-[22px] font-bold py-[15px]   hover:text-[#C3A275] ">ARM SLEEVES</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center  group hover:translate-y-[17px]  duration-[2s]">
            <Image src="/scrunchies.webp"  alt="pic"  width={280} height={280}
            className="w-[45] h-[40] mx-auto  group-hover:scale-100"/>
            <h2 className="text-[22px] font-bold py-[15px]   hover:text-[#C3A275] ">SCRUNCHIES</h2>
          </div>

          <div className="basis-[30%] m-[1.5%] shadow-lg  py-[20px] text-center group hover:translate-y-[17px]  duration-[2s]">
            <Image src="/tasbeeh.webp" alt="pic"  width={300} height={300}
            className="w-[45] h-[40] mx-auto group-hover:scale-100"/>
            <h2 className="text-[22px] font-bold py-[15px]  hover:text-[#C3A275] ">WHITE PEARL</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-y-[17px]  duration-[2s]">
            <Image src="/niqab.webp" alt="pic"  width={310} height={310}
            className=" w-[45] h-[40] mx-auto group-hover:scale-100"/>
            <h2 className="text-[22px] font-bold py-[15px]   hover:text-[#C3A275] ">NIQAB</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center  group hover:translate-y-[17px]  duration-[2s]">
            <Image src="/luxehijab.webp" alt="pic"  width={350} height={350}
            className="w-[45] h-[40] mx-auto  group-hover:scale-100"/>
            <h2 className="text-[22px] font-bold py-[15px]   hover:text-[#C3A275] ">LUXE HIJAB</h2>
          </div>
         
        </div>
      </div>
          <section>
            <Image src="/box.webp" alt="box" width={1700} height={1700} className="pt-5   hover:translate-y-[17px] duration-[2s]"></Image>
          </section>
      </section>
    </section>
     <section className="bg-black py-3 size-auto grid lg:grid-row-auto flex-wrap">
           <h1 className="text-[20px] md:text-[30px] lg:text-[40px] font-bold text-center py-[40px] text-white">Information</h1>
           <div className="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-[40%_auto] gap-[30px] flex-wrap">
             <div className="flex gap-15px mb-12  text-white" >
              <ul>
            <li className="text-[20px] font-bold font-mono ">FOLLOW US</li>
            <li  >Who we are</li>
            <li  >Return & Exchange Policy</li>
            <li  >Order Placement & Confirmation</li>
            <li  >Shipping & Delivery Policy</li>
            <li  >Privacy Policy </li>
            <li >Terms and Conditions</li>
            <li>FAQs</li> 
            </ul>
             </div>
             <div  className="basis-[45%] md:order-2 order-1 p-[20px] group">
             <h2 className=" sm:text-[10px] lg:text-[20px]  font-bold py-[15px] px-[30px] pl-20 text-end text-white hover:text-bold">Subscribe now to be the first to know about our promotional offers!</h2>
             <div className="pl-80 pt-14">
              <p className="text-white font-mono text-center">Copyright © 2024, HijabCorner </p>
             </div>
           </div>
           </div>
          </section>
          </main>
  
        )
      }
      export default Homepage
  