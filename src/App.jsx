import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Dog, Section1, Section2 } from "./components";


const App = () => {
  // const sec1Ref = useRef(null)
  // const sec2Ref = useRef(null)
  // const sec3Ref = useRef(null)
  return (
    <div className="w-full min-h-screen bg-black/90">
      <main className="w-full h-full relative">
        <div className="images fixed top-0 left-0 h-full w-full">
          <img className="h-full w-full object-cover transition-all duration-300 ease-out absolute top-0 left-0 opacity-0" id='tomorrowland' src="/images/tommorowland.png" alt="" />
          <img className="h-full w-full object-cover transition-all duration-300 ease-out absolute top-0 left-0 opacity-0" id='navy-pier' src="/images/navy-pier.png" alt="" />
          <img className="h-full w-full object-cover transition-all duration-300 ease-out absolute top-0 left-0 opacity-0" id='msi-chicago' src="/images/msi-chicago.png" alt="" />
          <img className="h-full w-full object-cover transition-all duration-300 ease-out absolute top-0 left-0 opacity-0" id='phone' src="/images/phone.png" alt="" />
          <img className="h-full w-full object-cover transition-all duration-300 ease-out absolute top-0 left-0 opacity-0" id='kikk' src="/images/kikk.png" alt="" />
          <img className="h-full w-full object-cover transition-all duration-300 ease-out absolute top-0 left-0 opacity-0" id='kennedy' src="/images/kennedy.png" alt="" />
          <img className="h-full w-full object-cover transition-all duration-300 ease-out absolute top-0 left-0 opacity-0" id='opera' src="/images/opera.png" alt="" />
        </div>
        <Canvas id="canvaselem" className="bg-[url(/images/background-l.png)] bg-cover bg-no-repeat transition-all duration-1000 ease-out" style={{height:"100vh",width:"100vw",top:0,left:0,position:"fixed",zIndex:1}}>
          <Dog />
        </Canvas>
        <section id="sec1" className="min-h-screen z-2 relative p-1">
          <Section1/>
        </section>
        <section id="sec2" className="min-h-screen z-2 relative">
          <Section2/>
        </section>
        <section id="sec3" className="min-h-screen z-2 relative"></section> 
      </main>
    </div>
  );
};

export default App;
