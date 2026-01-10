import { useGSAP } from "@gsap/react";
import { OrbitControls, useAnimations, useGLTF, useTexture } from "@react-three/drei";
import {  useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { MeshMatcapMaterial } from "three";
import * as THREE from 'three'
const Dog = () => {
    gsap.registerPlugin(useGSAP())
    gsap.registerPlugin(ScrollTrigger)
    
    const model = useGLTF("/models/dog.drc.glb")
    const dogModel = useRef(model);
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
    
    const [normalMap,sampleMatCap] = (useTexture(["/images/dog_normals.png","/matcap/mat-2.png"])).map(texture=>{
        texture.flipY = false,
        texture.colorSpace = THREE.SRGBColorSpace
        return texture
    })
    const [branchNormalMap,branchMap] = (useTexture(["/images/branches_normals.jpg","/images/branches_diffuse.jpg"])).map(texture=>{
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
        } else child.material = branchMaterial
        
    })

    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#sec1",
                endTrigger:"#sec3",
                start:"top top",
                end: "bottom bottom",
                markers:true,
                scrub:true
            }
        })

        tl
        .to(dogModel.current.scene.position,{
            z:"-=0.5",
            y: "+=0.12"
        })
        .to(dogModel.current.scene.rotation,{
            x: "+=0.2",
            y: "+=0.4"
        })
        .to(dogModel.current.scene.rotation,{
            y:`-=${Math.PI}`
        },"t1")
        .to(dogModel.current.scene.position,{
            x:`-=0.4`,
            z: "+=0.14"
        },"t1")

    },[])

  return (
    <>
    
      <primitive object={model.scene}  position={[0.2,-0.6,0]} rotation={[0,0.5,0]} />
      <directionalLight position={[0,5,5]} color={0xFFFFFF} intensity={10} />
    </>
  );
};

export default Dog;
