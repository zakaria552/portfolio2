// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import {FaLinkedin, FaGithub} from "./icons"
gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-section",
                start: "top bottom",
                end: "top 20%",
                // markers: true,
                scrub: true
            }
        })
        tl.to(".card-1", {
            translateX: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power1.inOut",
        }).to(".card-2", {
            translateX: 0,
            opacity: 0.8,
            duration: 1,
            ease: "power1.inOut",
        }, "<").to(".card-3", {
            translateY: 0,
            opacity: 0.8,
            duration: 1,
            ease: "power1.inOut",
        }, "<")
    }, [])
    useGSAP(() => {
        setTimeout(() => {
            gsap.set(".card-3", {
                translateY: 1000 
            })
        }, 100)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.card-3',
                start: 'top 80%',
                end: "top 55%",
                markers: false,
                scrub: true
            } 
        })
        tl.to(".career-1", {
            opacity: 1,
            ease: "expo.in"
        })
        tl.to(".careers > span", {
            height: "32px",
            ease: "power1.inOut",
        }, ">")
        .to(".career-2", {
            opacity: 1,
            ease: "expo.in"
        }, ">")
       
    }, [])
    return (
        <div className='about-section min-h-full w-full top-0 bg-slate-50 flex flex-col relative'>
            <div className='flex flex-col md:flex-row justify-center gap-4 p-4 m-auto'>
                <div className='card-1 flex flex-col items-center p-4 bg-[#96f2d7] translate-x-[-1000px] rounded-md w-full h-[400px] md:w-1/3 md:min-h-[600px]'>
                    <div className='w-[250px] h-[250px] rounded-full bg-[#c5ffeda3] md:w-[300px] md:h-[300px] md:mt-16'>

                    </div>
                    <div className='mt-4 font-jura text-center'>
                        <p className='font-bold'>Zakaria Farah</p>
                        <p className='font-jura'>zakaria.farah@outlook.com</p>

                    </div>
                    <div className='flex items-center gap-2'>
    
                        <a href='https://github.com/zakaria552' target='_blank'><FaGithub className='size-6'/></a>
                        <a href='https://www.linkedin.com/in/zakariafarah/' target='_blank'><FaLinkedin className='size-6'/></a>
                    </div>
                </div>
                <div className='flex flex-col gap-4 w-full md:w-1/3 md:min-h-[600px]'>
                    <div className='card card-2 bg-[#96f2d7] opacity-0 translate-x-[1500px] rounded-md h-fit md:h-1/2 p-4'>
                        <h1 className='text-xl font-dmSans mb-4'>About me</h1>
                        <p className='text-md mb-2 font-jura'>Full-stack software developer passionate about learning and building. From web applications to 3D graphics, containerization, and managing my own VPS, I love diving into all aspects of tech—backend, frontend, and deployment.</p>
                        <p className='text-md font-jura'>When I’m not coding, I enjoy exploring mathematics, cooking, gaming, and traveling to spark new ideas and inspiration.</p>
                    </div>
                    <div className='card-3 bg-[#96f2d7] opacity-0 rounded-md h-[300px] md:h-1/2 p-4'>
                        <h1 className='font-dmSans text-xl mb-4'>Professional Journey</h1>
                        <div className='careers flex flex-col gap-0 text-sm'>
                            <div className='career-1 opacity-0 flex items-center gap-4 md:gap-10'>
                                <img src="https://meterian.io/images/brand/meterian_logo_blue.svg" className='w-20'></img>
                                <div>
                                    <h1 className='font-jura font-bold'>Junior software developer</h1>
                                    <p className='font-jura'>Meterian, present</p>
                                </div>
                            </div>
                            <span className='ml-8 w-[3px] h-0 bg-slate-700 rounded-md'></span>
                            <div className='career-2 opacity-0 flex items-center gap-4 md:gap-10'>
                                <img src='https://socialtechtrust.org/wp-content/uploads/2022/08/Northcoders-e1667551772953.png' className='w-20'></img>
                                <div className='text-sm'>
                                    <h1 className='font-jura font-bold'>Trainee software developer</h1>
                                    <p className='font-jura '>Northcoders, 2023</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
//https://polypane.app/css-3d-transform-examples/