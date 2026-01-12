import React from 'react'
import 'remixicon/fonts/remixicon.css'
import {RiArrowRightSLine, RiMenu3Line} from '@remixicon/react'
const Section1 = () => {
  return (
    <div className='text-white'>
        <nav className='flex items-center text-sm min-h-8 mt-13 min-w-40 justify-between p-2 px-15 text-white'>
            <div className="nav-ele">
                <svg className='w-1/3' xmlns="http://www.w3.org/2000/svg" fill='#fff' viewBox="0 0 401.2 116.8"><path d="M98 84c0-13-7-23-26-23H53v47h19c19 0 26-10 26-24Zm-13 0c0 10-6 13-13 13h-7V72h7c7 0 13 3 13 12ZM101 108h37V97h-24v-8h21V79h-21v-7h23V61h-36v47ZM181 77c0-11-7-16-19-16h-20v47h12V94h8c12 0 19-5 19-17Zm-13 0c0 5-2 7-7 7h-7V71h7c5 0 7 2 7 6ZM183 72h14v36h13V72h15V61h-42v11ZM220 102c0 4 3 7 7 7a8 8 0 1 0-7-7Zm1 0c0-4 3-7 6-7 4 0 6 3 6 7 0 3-2 6-6 6-3 0-6-3-6-6Zm3 3h2v-2h1l2 2h3l-2-3 1-2c0-2-1-3-3-3h-4v8Zm5-5-1 1h-2v-2h2l1 1ZM48 24c0-13-7-23-26-23H3v47h19c19 0 26-10 26-24Zm-13 0c0 10-6 13-13 13h-6V12h6c7 0 13 3 13 12ZM100 24c0-14-9-24-25-24S51 10 51 24s9 25 24 25 25-10 25-25Zm-14 0c0 8-4 14-11 14s-11-6-11-14 4-13 11-13 11 6 11 13ZM175 49c13 0 21-6 21-16 0-7-5-11-13-13l-10-2c-4-1-5-2-5-4 0-3 2-4 6-4 5 0 9 2 9 6h12c0-11-9-16-21-16-11 0-19 6-19 15 0 8 5 12 13 13l10 2c4 1 5 2 5 5s-3 4-7 4c-5 0-9-3-10-7h-12c0 10 7 17 21 17ZM197 12h15v36h12V12h15V1h-42v11ZM263 49c14 0 21-6 21-21V1h-12v27c0 7-3 10-9 10-5 0-8-3-8-10V1h-13v27c0 15 8 21 21 21ZM333 24c0-13-7-23-26-23h-19v47h19c19 0 26-10 26-24Zm-13 0c0 10-6 13-13 13h-7V12h7c7 0 13 3 13 12ZM336 48h13V1h-13v47ZM401 24c0-14-9-24-24-24s-25 10-25 24 9 25 25 25 24-10 24-25Zm-13 0c0 8-4 14-11 14s-12-6-12-14 5-13 12-13 11 6 11 13ZM129 31h10c-1 4-5 7-11 7-7 0-12-5-12-14 0-8 5-13 12-13 4 0 8 2 9 6h14c-2-11-11-17-23-17-16 0-25 10-25 24 0 15 9 25 22 25 7 0 12-3 15-7v6h11V21h-22v10ZM30 61H20L0 117h10l20-56Z"/></svg>
            </div>
            <div className="nav-ele flex items-center -ml-[20%]">
                <span><RiArrowRightSLine className='size-4.5 mt-[1.8px] text-red-500'/></span>Our Showreel
            </div>
            <div className="nav-ele">
                <RiMenu3Line/>
            </div>
        </nav>
        <div className="middle gap-15 text-white flex justify-between items-center">
            <div className="left gtsectral leading-19 text-8xl text-right pt-24 gap-2 flex items-center justify-end text w-1/2 ">
                {
                ["We","Make","Good","Shit"].map((elem,id)=>{
                    return (
                        <React.Fragment key={id}>
                        {elem}
                        <br/>
                        </React.Fragment>
                    )
                })
                }
            </div>
            <div className="right w-1/2"></div>
        </div>
        <div className="bottom gap-15 flex items-center justify-between">
            <div className="left w-1/2"></div>
            <div className="right w-1/2">
                <p className='font-light text-xl'>
                    Dogstudio is a multidisciplinary <br/>
                    creative studio at the intersection <br/>
                    of art, design and technology.
                </p>
            </div>
        </div>

        <div className="line1 w-[620px] absolute h-px -translate-y-8 -translate-x-12 bg-red-500 opacity-[0.496] rotate-45 "></div>
        <div className="line1 w-40 absolute right-[10%] top-[44%] h-px -translate-y-8 -translate-x-12 bg-red-500 opacity-[0.596] -rotate-45 "></div>
    </div>
  )
}

export default Section1