// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useWindowScroll } from 'react-use';
import "./styles/navbar.css"
import { useGSAP } from '@gsap/react';
ScrollTrigger.normalizeScroll(true);

gsap.registerPlugin(ScrollTrigger)
const Navbar = () => {
    const [ mounted, setMounted] = useState(false)
    const [ prevScrollY, setPrevScrollY ] = useState(0)
    const [ isHidden, setIsHidden ] = useState(false)
    const [ showNavBorder, setShowNavBorder] = useState(false)
    const [ showMenu, setShowMenu] = useState(false)
    const items = [{name: "About"}, {name: "Projects"}, {name: "Contacts"}]
    const logoRef = useRef(null)
    const navRef = useRef()
    const {y: currentScrollY} = useWindowScroll()
    console.log(showMenu)
    useGSAP(() => {
        gsap.fromTo(logoRef.current, {rotate: 0}, { rotate: 360, duration: 2, repeat: -1})
    })
    useGSAP(() => {
        gsap.to(navRef.current, {
            translateY: isHidden ? -100: 0,
            opacity: isHidden ? 0.3: 1,
            duration: isHidden ?  0.7: 0.3,
        })
    }, [isHidden])
    useGSAP(() => {
        if(!mounted) return
        const tl = gsap.timeline({paused: true})
        const tl2 = gsap.timeline({paused: true})
        const tween = gsap.set(".hamburger .bar-2", {opacity: showMenu ? 0: 1, delay: showMenu ? 0.5: 0, paused: true})
        gsap.set(".hamburger-menu", { x: showMenu ? "100%": "0"})
        const menuTween = gsap.to(".hamburger-menu", { x: showMenu ? 0: "100%", duration: 0.5, paused: true, ease: showMenu ? "power3.in": "power1.out"})
        tl.to(".hamburger .bar-1", {y: showMenu ? "+10px": "-0px", rotate: "0", duration: 0.5})
        tl2.to(".hamburger .bar-3", {y: showMenu ? "-10px": "+0px", rotate: "0", duration: 0.5})
        tl.to(".hamburger .bar-1", {rotate: showMenu ?  "45": "0", duration: 0.5})
        tl2.to(".hamburger .bar-3", {rotate: showMenu ?  "-45": "0", duration: 0.5})
        tl.play()
        tl2.play()
        tween.play()
        menuTween.play()
        
    }, [showMenu])
    useEffect(() => {
        if(currentScrollY === 0) {
            setIsHidden(false)
            setShowNavBorder(false)
            console.log("setting to false")
        } else if(currentScrollY > prevScrollY ) {
            setIsHidden(true)
            setShowNavBorder(false)
        } else if (currentScrollY < prevScrollY) {
            setIsHidden(false)
            setShowNavBorder(true)
        }
        setPrevScrollY(currentScrollY)
    }, [currentScrollY, prevScrollY])
    useEffect(() => {
        setMounted(true)
    }, [])
    return (
        <div className={` w-[100%] px-[d5%] flex justify-center fixed z-20`} ref={navRef}>
            <div className={`hidden w-[100%] p-4 m-2 md:flex justify-between items-center ${showNavBorder ? "nav-float": ""} rounded-md h-16`}>
                <div className=''>
                    <h1 ref={logoRef} className='font-jaro text-4xl text-white'>ZF</h1>
                </div>
                <div className='text-white flex gap-8 font-potta'>
                    {items.map(({name}) => {
                        return <>
                            <button className="relative group  py-1.5 px-0.5">
                            <span className="nav-btn-hover"></span>{name} </button>
                        </>
                    })}
          
                </div>
            </div>
            <div className='relative flex justify-between w-screen p-4'>
                <div className=''>
                    <h1 ref={logoRef} className='font-jaro text-4xl text-white'>ZF</h1>
                </div>
                <div className='z-30'>
                    <div onClick={() => setShowMenu(!showMenu)} className='hamburger flex flex-col gap-[6px]'>
                        {[1,2,3].map((num) => {
                            return <div key={"bar"+num} className={`bar-${num} w-8 h-1 bg-white rounded-lg`}></div>
                        })}
                    </div>
                </div>
                <div className={`flex translate-x-[100%] hamburger-menu`}>
                    <div className=''>
                        {items.map(({name}, i) => {
                            return <div key={"menu-item-"+i} className='text-white mb-2'>{name}</div>
                        })}
                    </div>
                    <div className='text-white'>
                        <div className='w-full h-[2px] rounded-md bg-white'></div>
                        <div>Socials</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
