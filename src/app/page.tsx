import Image from "next/image";


      function Homepage(){
        return(
          <main>
 
        <section>
      <div  className="basis-[45%] md:order-2 order-1 p-[5px] group">
     
  <Image     src="/top.webp" alt="hijab" width={1500} height={1200} className="  border-black  " ></Image> 
            
          </div>
         </section>
          <section className="bg-white lg:py-[80px] sm:py-[50px] py-[30px] px-[20px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex md:flex-row flex-col">
          <div className="basis-[55%] md:order-1 order-2">
            <p className="text-[18px] font-serif">Effortless Style with Our Instant Hijab</p>
            <h1 className="font-bold lg:text-[50px] text-[25px] py-[30px]  hover:text-slate-700 hover:translate-x-1 ">HIJAB ACCESSORIESUnbeatable & Graceful Style</h1>
            <p className="text-[18px]">Welcome to Rosh&apos; your source for modern Islamic lifestyle products rooted in faith and integrity. Discover our collection of modest fashion&apos; hijabs and home essentials crafted with care&apos; ethics&apos; and a commitment to Islamic values.</p>
            <div className="flex gap-[30px] py-[30px] sm:justify-start justify-center">
              <button className="bg-slate-800 text-white md:p-[15px_32px] p-[10px_28px] rounded-[12px] hover:bg-red-300   hover shadow-lg hover:text-black hover:scale-125 `duration-&lsqb;2.1s&rsqb;`">Explore</button>
              <button  className="bg-slate-800 text-white md:p-[15px_32px] p-[10px_28px] rounded-[12px] hover:bg-red-300 hover shadow-lg hover:text-black hover:scale-125 `duration-&lsqb;2.1s&rsqb;`">Shop Now</button>
            </div>
          </div>
          <div  className="basis-[45%]  rounded-lg md:order-2 order-1 p-[20px] group">
            <Image className="hover:translate-y-4`duration-&lsqb;2.1s&rsqb;` rounded-xl border-black"   src="/scarf.jpg" alt="hijab" width={550} height={500}></Image>
            
          </div>
        </div>
      </div>

      <div className="max-w-[132] mx-auto">
          <h2 className="text-center text-bold font-bold hover:text-[#C3A275] text-[30px] p-[15px] "> ABAYA&apos;S _ HIJAB</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="basis-[30%] m-[1.5%] shadow-lg  py-[20px] text-center group md:hover:translate-y-[17px]">
          <Image src="/abayo.webp" alt="pic" width={370} height={370}
            className="w-[45] h-[40] mx-auto group-hover:scale-[1.1]"></Image>
            <h2 className="text-[16px] md:text-[22px] font-bold py-[15px] group-hover:pt-9  hover:text-[#C3A275] ">ABYAS</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group md:hover:translate-y-[17px] ">
            <Image src="/kid.webp" alt="pic" width={370} height={370}
            className=" w-[45] h-[40] mx-auto group-hover:scale-[1.1]"/>
            <h2 className="text-[16px] md:text-[22px] font-bold py-[15px]  group-hover:pt-9  hover:text-[#C3A275] ">KID&apos;S ABAYAS</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center  group md:hover:translate-y-[17px]  ">
            <Image src="/purple.webp" alt="pic" width={350} height={350}
            className="w-[45] h-[40] mx-auto  group-hover:scale-[1.1]"/>
            <h2 className="text-[16px] md:text-[22px]  font-bold py-[15px]  group-hover:pt-9  hover:text-[#C3A275] ">PARTY WEAR</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center  group md:hover:translate-y-[17px] ">
            <Image src="/maxi.webp" alt="pic" width={370} height={370}
            className="w-[45] h-[40] mx-auto  group-hover:scale-[1.1]"/>
            <h2 className="text-[16px] md:text-[22px]  font-bold py-[15px] group-hover:pt-9  hover:text-[#C3A275] ">MAXI ABAYA</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group md:hover:translate-y-[17px]">
            <Image src="/Oyoon.webp" alt="pic" width={350} height={350}
            className="w-[45] h-[40] mx-auto group-hover:scale-[1.1]"/>
            <h2 className="text-[16px] md:text-[22px]  font-bold py-[15px] group-hover:pt-9  hover:text-[#C3A275] ">FANCY WEAR</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px]   text-center group md:hover:translate-y-[17px] ">
            <Image src="/brownhijab.webp" alt="pic" width={370} height={370}
            className="w-[45] h-[40] mx-auto group-hover:scale-[1.1]"/>
            <h2 className="text-[16px] md:text-[22px]  font-bold py-[15px]  group-hover:pt-9  hover:text-[#C3A275] ">HIJAB WEAR</h2>
          </div>
        </div>
      </div>
      {/* </section>
      <section className="bg-white lg:py-[80px] sm:py-[50px] py-[30px] px-[20px]"> */}
      <div className="max-w-[1320px] mx-auto ">
          <h2 className="text-center text-bold font-bold hover:text-[#C3A275] mt-7 text-[35px] p-[15px] ">PINS _ BROACH</h2>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="basis-[30%] m-[1.5%] shadow-lg  py-[20px] text-center group md:hover:translate-y-[17px] `duration-&lsqb;2.1s&rsqb;` ">
            <Image src="/bluepin.webp" alt="pic" width={400} height={400}
            className="w-[30] h-[30]  md:w-[45] md:h-[40] mx-auto group-hover:scale-100 "/>
            <h2 className="text-[16px] md:text-[22px]  font-bold py-[12px]   hover:text-[#C3A275]">TUSPINS</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group md:hover:translate-y-[17px]  `duration-&lsqb;2.1s&rsqb;`">
            <Image src="/bruch.jpg" alt="pic" width={400} height={400}
            className=" w-[30] h-[30]  md:w-[45] md:h-[40] mx-auto group-hover:scale-100"/>
            <h2 className="text-[16px] md:text-[22px]  font-bold py-[15px]    hover:text-[#C3A275]">SPHERICAL PINS</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center  group md:hover:translate-y-[17px]  `duration-&lsqb;2.1s&rsqb;` ">
            <Image src="/pinkpin.webp" alt="pic" width={400} height={400}
            className="w-[30] h-[30]  md:w-[45] md:h-[40] mx-auto  group-hover:scale-100"/>
            <h2 className="text-[16px] md:text-[22px]  font-bold py-[15px]    hover:text-[#C3A275]">BALL TUSPINS</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center  group md:hover:translate-y-[17px]  `duration-&lsqb;2.1s&rsqb;`">
            <Image src="/silver.webp" alt="pic" width={400} height={400}
            className="w-[30] h-[30]  md:w-[45] md:h-[40] mx-auto  group-hover:scale-100"/>
            <h2 className="text-[16px] md:text-[22px]  font-bold py-[15px]   hover:text-[#C3A275]">SILVER HIJAB PIN</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group md:hover:translate-y-[17px] `duration-&lsqb;2.1s&rsqb;`">
            <Image src="/moonlight.webp" alt="pic" width={400} height={400}
            className="w-[30] h-[30]  md:w-[45] md:h-[40] mx-auto group-hover:scale-100"/>
            <h2 className="text-[16px] md:text-[22px]  font-bold py-[15px]   hover:text-[#C3A275]">MOONLIGHT PIN</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px]   text-center group md:hover:translate-y-[17px]  `duration-&lsqb;2.1s&rsqb;`">
            <Image src="/blue-magnet.webp" alt="pic" width={400} height={400}
            className="w-[30] h-[30]  md:w-[45] md:h-[40] mx-auto group-hover:scale-100"/>
            <h2 className="text-[16px] md:text-[22px]  font-bold py-[15px]    hover:text-[#C3A275]">MAGNET PIN</h2>
          </div>
        </div>
      </div>
      <section className="py-10 grid grid-row-auto flex-wrap">
        <div  className="flex md:flex-row flex-col">
        <div className="basis-[45%] md:order-1 order-2 p-[20px] group">
          <h2 className="font-bold lg:text-[32px] text-[25px] py-[35px] underline underline-offset-8 hover:text-[#C3A275]">Elevate your style with classy hijabs
          </h2>
          <p className="font-serif text-[20px] pt-[50px] text-center ">Wearing a hijab pleases Allah greatly and you shall be rewarded with the best and the greatest of things in this life and the hereafter</p>
        <Image src="/sider.webp" alt="abaya" width={550} height={550} className="basis-40 `duration-&lsqb;2.1s&rsqb;`hover:translate-x-[17px] pt-16 pb-5"></Image>
    </div>
    <div  className="basis-[55%] md:order-2 order-1 px-[50px]">
        <Image src="/abayas.jpeg" alt="abaya" width={600} height={1000} className= "basis-40 `duration-&lsqb;2.1s&rsqb;`md:hover:translate-y-[17px]  pb-5" ></Image>
        </div>
          </div>
          <div className="max-w-[1320px] mx-auto">
          <h2 className="text-center text-bold font-bold hover:text-[#C3A275] text-[30px] p-[15px] ">ESSENTIALS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 space-x-9 ">
          <div className="basis-[30%] m-[1.5%] shadow-lg  py-[20px] text-center group md:hover:translate-y-[17px]  `duration-&lsqb;2.1s&rsqb;`">
            <Image src="/cap.webp" alt="pic"  width={300} height={300}
            className="w-[45] h-[40] mx-auto group-hover:scale-100"/>
            <h2 className="text-[16px] md:text-[22px]  font-bold py-[15px]  hover:text-[#C3A275] ">UNDER SCARF</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group md:hover:translate-y-[17px]  `duration-&lsqb;2.1s&rsqb;`">
            <Image src="/Black.webp" alt="pic"  width={300} height={300}
            className=" w-[45] h-[40] mx-auto group-hover:scale-100"/>
            <h2 className="text-[16px] md:text-[22px]  font-bold py-[15px]   hover:text-[#C3A275] ">ARM SLEEVES</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center  group md:hover:translate-y-[17px]  `duration-&lsqb;2.1s&rsqb;`">
            <Image src="/scrunchies.webp"  alt="pic"  width={300} height={300}
            className="w-[45] h-[40] mx-auto  group-hover:scale-100"/>
            <h2 className="text-[16px] md:text-[22px]  font-bold py-[15px]   hover:text-[#C3A275] ">SCRUNCHIES</h2>
          </div>

          <div className="basis-[30%] m-[1.5%] shadow-lg  py-[20px] text-center group md:hover:translate-y-[17px]  `duration-&lsqb;2.1s&rsqb;`">
            <Image src="/tasbeeh.webp" alt="pic"  width={330} height={300}
            className="w-[45] h-[40] mx-auto group-hover:scale-100"/>
            <h2 className="text-[16px] md:text-[22px]  font-bold py-[15px]  hover:text-[#C3A275] ">WHITE PEARL</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group md:hover:translate-y-[17px]  `duration-&lsqb;2.1s&rsqb;`">
            <Image src="/niqab.webp" alt="pic"  width={310} height={310}
            className=" w-[45] h-[40] mx-auto group-hover:scale-100"/>
            <h2 className="text-[16px] md:text-[22px]  font-bold py-[15px]   hover:text-[#C3A275] ">NIQAB</h2>
          </div>
          <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center  group md:hover:translate-y-[17px]  `duration-&lsqb;2.1s&rsqb;`">
            <Image src="/luxehijab.webp" alt="pic"  width={350} height={350}
            className="w-[45] h-[40] mx-auto  group-hover:scale-100"/>
            <h2 className="text-[16px] md:text-[22px]  font-bold py-[15px]   hover:text-[#C3A275] ">LUXE HIJAB</h2>
          </div>
         
        </div>
      </div>
          <section>
            <Image src="/box.webp" alt="box" width={1900} height={1900} className="pt-5 h-56 w-96 md:w-[1460px]  md:h-[460px]   md:hover:translate-y-[17px] `duration-&lsqb;2.1s&rsqb;`"></Image>
          </section>
      </section>
    </section>
   
          </main>
  
        )
      }
      export default Homepage
  