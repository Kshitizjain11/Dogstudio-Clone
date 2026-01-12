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
    
    const [normalMap] = (useTexture(["/images/dog_normals.png"])).map(texture=>{
        texture.flipY = false,
        texture.colorSpace = THREE.SRGBColorSpace
        return texture
    })
    const [branchNormalMap,branchMap] = (useTexture(["/images/branches_normals.jpg","/images/branches_diffuse.jpg"])).map(texture=>{
        texture.colorSpace = THREE.SRGBColorSpace
        return texture
    })

    const [
        mat1,
        mat2,
        mat3,
        mat4,
        mat5,
        mat6,
        mat7,
        mat8,
        mat9,
        mat10,
        mat11,
        mat12,
        mat13,
        mat14,
        mat15,
        mat16,
        mat17,
        mat18,
        mat19,
        mat20
    ] = (useTexture(
    Array.from({ length: 20 }, (_, i) => `/matcap/mat-${i + 1}.png`)
    ).map(texture=>{
        texture.colorSpace = THREE.SRGBColorSpace
        return texture
    }))

    const dogMaterial = React.useMemo(() => {
        return new MeshMatcapMaterial({
            normalMap,
            matcap: mat2
        })
        }, [normalMap])

    const branchMaterial = React.useMemo(() => {
        return new MeshMatcapMaterial({
            normalMap: branchNormalMap,
            map: branchMap
        })
}, [branchNormalMap, branchMap])
    useEffect(() => {
    model.scene.traverse(child => {
        if (child.isMesh) {
        if (child.name.includes("DOG")) {
            child.material = dogMaterial
        } else {
            child.material = branchMaterial
        }
        }
    })
}, [model.scene, dogMaterial, branchMaterial])

    const material = useRef({
        uMatcap1: {value : mat19},
        uMatcap2: {value : mat2},
        uProgress: { value: 1.0}
    })    
    const onBeforeCompile = async (shader)=>{
        shader.uniforms.uMatcapTexture1 = material.current.uMatcap1
        shader.uniforms.uMatcapTexture2 = material.current.uMatcap2
        shader.uniforms.uProgress = material.current.uProgress

        // Store reference to shader uniforms for GSAP animation

        shader.fragmentShader = shader.fragmentShader.replace(
            "void main() {",
            `
        uniform sampler2D uMatcapTexture1;
        uniform sampler2D uMatcapTexture2;
        uniform float uProgress;

        void main() {
        `
        )

        shader.fragmentShader = shader.fragmentShader.replace(
            "vec4 matcapColor = texture2D( matcap, uv );",
            `
          vec4 matcapColor1 = texture2D( uMatcapTexture1, uv );
          vec4 matcapColor2 = texture2D( uMatcapTexture2, uv );
          float transitionFactor  = 0.2;
          
          float progress = smoothstep(uProgress - transitionFactor,uProgress, (vViewPosition.x+vViewPosition.y)*0.5 + 0.5);

          vec4 matcapColor = mix(matcapColor2, matcapColor1, progress );
        `
        )
    }

    dogMaterial.onBeforeCompile = onBeforeCompile

    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#sec1",
                endTrigger:"#sec4",
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
            x:`-=0.44`,
            z: "+=0.41"
        },"t1")
    },[])

    useEffect(() => {
      document.querySelector(`.title[imaget="tomorrowland"]`).addEventListener("mouseenter",()=>{
        material.current.uMatcap1.value = mat19
        gsap.to(material.current.uProgress,{
            value: 0.0,
            duration:0.3,
            onComplete: ()=>{
                material.current.uMatcap2.value = material.current.uMatcap1.value
                material.current.uProgress.value = 1.0 
            }
        })
      })
      
      document.querySelector(`.title[imaget="navy-pier"]`).addEventListener("mouseenter",()=>{
        material.current.uMatcap1.value = mat8
        gsap.to(material.current.uProgress,{
            value: 0.0,
            duration:0.3,
            onComplete: ()=>{
                material.current.uMatcap2.value = material.current.uMatcap1.value
                material.current.uProgress.value = 1.0 
            }
        })
      })
      
      document.querySelector(`.title[imaget="msi-chicago"]`).addEventListener("mouseenter",()=>{
        material.current.uMatcap1.value = mat9
        gsap.to(material.current.uProgress,{
            value: 0.0,
            duration:0.3,
            onComplete: ()=>{
                material.current.uMatcap2.value = material.current.uMatcap1.value
                material.current.uProgress.value = 1.0 
            }
        })
      })
      
      document.querySelector(`.title[imaget="phone"]`).addEventListener("mouseenter",()=>{
        material.current.uMatcap1.value = mat12
        gsap.to(material.current.uProgress,{
            value: 0.0,
            duration:0.3,
            onComplete: ()=>{
                material.current.uMatcap2.value = material.current.uMatcap1.value
                material.current.uProgress.value = 1.0 
            }
        })
      })
      
      document.querySelector(`.title[imaget="kikk"]`).addEventListener("mouseenter",()=>{
        material.current.uMatcap1.value = mat10
        gsap.to(material.current.uProgress,{
            value: 0.0,
            duration:0.3,
            onComplete: ()=>{
                material.current.uMatcap2.value = material.current.uMatcap1.value
                material.current.uProgress.value = 1.0 
            }
        })
      })
      
      document.querySelector(`.title[imaget="kennedy"]`).addEventListener("mouseenter",()=>{
        material.current.uMatcap1.value = mat17
        gsap.to(material.current.uProgress,{
            value: 0.0,
            duration:0.3,
            onComplete: ()=>{
                material.current.uMatcap2.value = material.current.uMatcap1.value
                material.current.uProgress.value = 1.0 
            }
        })
      })
      
      document.querySelector(`.title[imaget="opera"]`).addEventListener("mouseenter",()=>{
        material.current.uMatcap1.value = mat13
        gsap.to(material.current.uProgress,{
            value: 0.0,
            duration:0.3,
            onComplete: ()=>{
                material.current.uMatcap2.value = material.current.uMatcap1.value
                material.current.uProgress.value = 1.0 
            }
        })
      })
      document.querySelector(`.titles`).addEventListener("mouseleave",()=>{
        material.current.uMatcap1.value = mat2
        gsap.to(material.current.uProgress,{
            value: 0.0,
            duration:0.3,
            onComplete: ()=>{
                material.current.uMatcap2.value = material.current.uMatcap1.value
                material.current.uProgress.value = 1.0 
            }
        })
      })
   
    }, [])
    
  return (
    <>
    
      <primitive object={model.scene}  position={[0.2,-0.6,0]} rotation={[0,0.5,0]} />
      <directionalLight position={[0,5,5]} color={0xFFFFFF} intensity={10} />
    </>
  );
};

export default Dog;
