import { OrbitControls, useAnimations, useGLTF, useTexture } from "@react-three/drei";
import {  useThree } from "@react-three/fiber";
import React, { useEffect } from "react";
import { MeshMatcapMaterial } from "three";
import * as THREE from 'three'
const Dog = () => {
  
    const model = useGLTF("/models/dog.drc.glb")
    useThree(({camera,gl,scene})=>{
        camera.position.z = 0.5,
        gl.outputColorSpace = THREE.SRGBColorSpace,
        gl.toneMapping = THREE.ReinhardToneMapping
    })

    const {actions} = useAnimations(model.animations,model.scene)
    useEffect(()=>{
        actions["Take 001"].play()

    },[actions])

    // const texture = useTexture({
    //     normalMap:"/images/dog_normals.png",
    //     sampleMatCap:"/matcap/mat-2.png"
    // })
    // texture.normalMap.flipY = false
    // texture.sampleMatCap.colorSpace = THREE.SRGBColorSpace
    
    const [normalMap,sampleMatCap,branchNormalMap,branchMap] = (useTexture(["/images/dog_normals.png","/matcap/mat-2.png","/images/branches_normals.jpg","/images/branches_diffuse.jpg"])).map(texture=>{
        texture.flipY = false,
        texture.colorSpace = THREE.SRGBColorSpace
        return texture
    })
    const dogMaterial =  new MeshMatcapMaterial({
                normalMap: normalMap,
                matcap: sampleMatCap
            })

    const branchMaterial = new MeshMatcapMaterial({
        normalMap: branchNormalMap,
        map: branchMap
    })
    model.scene.traverse((child)=>{
        if (child.name.includes("DOG")){
            child.material = dogMaterial
        }

        if (child.name.includes("BRANCH")){
            child.material = branchMaterial
        }
        
    })

  return (
    <>
    
      <primitive object={model.scene}  position={[0.2,-0.6,0]} rotation={[0,0.5,0]} />
      <directionalLight position={[0,5,5]} color={0xFFFFFF} intensity={10} />
        <OrbitControls/>
    </>
  );
};

export default Dog;
