// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const [loading, setLoading] = useState(true)
    const bgRef = useRef()
    let loaderTweens;
    const handleCanPlay = () => {
        setTimeout(() => {
            loaderTweens.forEach((tween) => {
                tween.revert()
            })
            gsap.to(".loader", {
                zoom: 110,
                opacity: 0.2,
                duration: 1,
                ease: 'expo.in'
            })
            setTimeout(() => setLoading(false), 1000)
        }, 1000)
    }
    useGSAP(() => {
        gsap.from(".hero-section", {
            clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
        })
        gsap.to(".hero-section", {
            clipPath: 'polygon(2% 6%, 98% 7%, 70% 75%, 22% 83%)',
            ease: "power1.inOut",
            duration: 1,
            scrollTrigger: {
                trigger: bgRef.current,
                start: "bottom bottom",
                end: "bottom center",
                markers: true,
                scrub: true
            }
        })
    }, [])
    useGSAP(() => {
        loaderTweens = [1,2,3].map((el, i) => {
            return gsap.to(`.loader .dot-${i}`, {
               y: "-10px",
               duration: 1,
               delay: i * 1 / 3,
               repeat: -1,
               repeatDelay: 0.3,
               yoyo: true,
               ease: "elastic.inOut"
            })
        })
    })
    return <div className=' h-full w-full bg-slate-50 flex flex-col relative'>
        { loading && <div className='absolute z-50 h-full w-full bg-black flex justify-center items-center loader'>
            <div className='dots-container flex gap-1'>
                {[1,2,3].map((el, i) => <div key={i} className={`z-10 bg-white size-4 rounded-full dot dot-${i}`}></div>)}
            </div>
        </div>}
        <div className='hero-section relative h-full w-full z-10'>
            <video onCanPlay={handleCanPlay}
            ref={bgRef} autoPlay={true} muted loop src='/mp4/8721924-uhd_4096_2160_25fps.mp4'
            className='bg-video absolute w-screen h-screen object-cover'></video>
            <div className='absolute z-20 px-3 text-black md:px-10 mt-[40%] md:mt-[10%]'>
                <h1 className='font-potta text-xl text-slate-300'>Hi, welcome to my portfolio site</h1>
                <h1 className='font-jaro text-5xl md:text-6xl text-white'>
                    Building the Future, <br></br>
                    One Line of Code at a Time
                </h1>
                <h1 className='font-potta text-slate-300'>
                    Junior software developer at Meterian
                </h1>
                <button className='mt-2 px-4 py-2 rounded-md bg-cyan-300'>Getdd in touch</button>
            </div>

        </div>

        <div className='absolute z-0 px-3 md:px-10 mt-[40%] md:mt-[10%]'>
            <h1 className='font-potta text-xl'>Hi, welcome to my portfolio site</h1>
            <h1 className='font-jaro text-5xl md:text-6xl'>
                Building the Future, <br></br>
                One Line of Code at a Time
            </h1>
            <h1 className='font-potta z-10'>
                Junior software developer at Meterian
            </h1>
            <button className='mt-2 px-4 py-2 rounded-md bg-black text-white'>Get in touch</button>
        </div>
        
    </div>

}

export default Hero;
