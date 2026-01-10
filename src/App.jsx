import React, { useRef } from "react";
import Dog from "./components/Dog";
import { Canvas } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const App = () => {
  // const sec1Ref = useRef(null)
  // const sec2Ref = useRef(null)
  // const sec3Ref = useRef(null)
  return (
    <div className="text-4xl w-full min-h-screen bg-black/90">
      <main className="w-full h-full relative">
        <Canvas className="bg-[url(/images/background-l.png)] bg-cover bg-no-repeat" style={{height:"100vh",width:"100vw",top:0,left:0,position:"fixed",zIndex:1}}>
          <Dog />
        </Canvas>
        <section id="sec1" className="min-h-screen z-2 relative border border-white "></section>
        <section id="sec2" className="min-h-screen z-2 relative border border-white "></section>
        <section id="sec3" className="min-h-screen z-2 relative border border-white "></section> 
      </main>
    </div>
  );
};

export default App;
