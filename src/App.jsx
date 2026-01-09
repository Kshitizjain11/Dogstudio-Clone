import React from "react";
import Dog from "./components/Dog";
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <div className="text-4xl w-full h-screen bg-zinc-500">
      <Canvas>
        <Dog />
      </Canvas>
    </div>
  );
};

export default App;
