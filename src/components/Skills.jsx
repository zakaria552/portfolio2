import React, { useRef } from 'react';
import AnimatedText from "./AnimatedText"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {GiStoneCrafting} from "./icons"
import Technologies from './Technologies';

const Skills = () => {
    const skills = [
        {
            label: "V",
            title: "Programming expertise",
            paragraph: "I have a strong programming foundation, proficient in <span class='highlight-tech'>JavaScript</span>, moderate in <span class='highlight-tech'>Python</span>, and currently learning <span class='highlight-tech'>C</span> and <span class='highlight-tech'>C++</span>. I understand OOP, functional programming, data structures, and basic algorithms, and I strive to adhere to clean code practices.",
            techs: [{src:"images/logos/javascript.svg"}, {src:"images/logos/python.svg"}, {src:"images/logos/c.svg"}, {src:"images/logos/c++.svg"}]
        },
        {
            label: "IV",
            title: "Unix Proficiency",
            paragraph: "I am comfortable using Unix based os as my preferred operating system. I am familiar with basic bash commands and have utilized scripting to automate tasks, such as building React projects and deploying them to servers.",
            techs: []
        },
        {
            label: "III",
            title: "Backend expertise",
            paragraph: "Experienced in building fully tested RESTful APIs with Test-Driven Development (TDD) using <span class='highlight-tech'>Nodejs</span> and <span class='highlight-tech'>Express</span> framework, alongside developing microservices. I have utilized <span class='highlight-tech'>Nginx</span> as a web server and reverse proxy for service gateways in my projects. I am familiar working with both relational and non-relational databases, such as <span class='highlight-tech'>MySQL</span> and <span class='highlight-tech'>MongoDB</span>. Currently, I am exploring <span class='highlight-tech'>WebSockets</span> for real-time communication.",
            techs: [{src:"images/logos/nodejs.svg"}, {src:"images/logos/express.svg"}, {src:"images/logos/nginx.svg"}, {src:"images/logos/mongodb.svg"}, {src:"images/logos/mysql.svg"}]
        },
        {
            label: "II",
            title: "Container Orchestration",
            paragraph: "I recently adopted <span class='highlight-tech'>Docker</span> and love the idea of 'write once, run anywhere.' It has become my favorite tool of the year, and I now use it regularly to containerize my projects and spin them off on my VPS server. I am continuously expanding my knowledge and skills in Docker to improve my workflows and project deployment.",
            techs: []
        },
        {
            label: "I",
            title: "Frontend expertise",
            paragraph: "I am proficient in <span class='highlight-tech'>HTML</span>, <span class='highlight-tech'>CSS</span>, and experienced with frameworks and libraries like <span class='highlight-tech'>React</span>, <span class='highlight-tech'>jQuery</span>, and <span class='highlight-tech'>Tailwind</span>. I specialize in building responsive single-page applications, with a focus on creating intuitive and user-friendly designs. Currently, I am expanding my skills by learning about 3D graphics.", 
            techs: [{src:"images/logos/html.svg"}, {src:"images/logos/css.svg"}, {src:"images/logos/jquery.svg"}, {src:"images/logos/react.svg"}, {src:"images/logos/tailwind.svg"}]
        },
    ]
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".skills",
                start: "top 80%",
                end: "top 40%",
                // markers: true,
                scrub: true
            }
        })
        tl.to(".skills, .skill", {
            opacity: 1,
            duration: 2
        })
        .to(`.skill-${skills[0].label}-text`, {
            translateX: 0,
            opacity: 1, 
            ease: "back.in",
            duration: 2,
            scrollTrigger: {
                trigger: `.skill-${skills[0].label}`,
                start: "top 90%",
                end: "top 80%",
                // markers: true,
                scrub: true
            }
        })
        skills.forEach(({label}, index) => {
            console.log()
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: `.skill-${label}-trigger`,
                    start: "top bottom",
                    end: "top center",
                    // markers: true,
                    scrub: true
                }
            })
            tl.to(".scrollbar-"+label, {  
                display: 'block',
                duration: 2,
                ease: "expo.in"
            })
            .to(`.skill-${label}-text`, {
                display: 'block',
                duration: 0.2,
                opacity: 1,
                ease: "expo.in"
            }, "<")
            .to(`.skill-${label}`, {
                color: "white"
            }, "<" )
            .to(`.scrollbar-${label} > div`, {
                height: "100%", 
                scrollTrigger: {
                    trigger: `.skill-${label}-trigger`,
                    start: "top bottom",
                    end: "top center",
                    // markers: true,
                    scrub: true
                }
            }, ">")
            if(index < skills.length - 1) {
                tl.to(`.scrollbar-${label}, .skill-${label}-text`, {
                    display: 'none',
                    duration: 2,
                    ease: "expo.out",
    
                }, ">")
                .to(`.skill-${label}`, {
                    color: "#666666"
                }, ">")
            }
        })
    })
    useGSAP(() => {
        skills.forEach(({label, techs}) => {            
            if(!techs.length) return
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: `.skill-${label}-trigger`,
                    start: "top bottom",
                    end: "top 85%",
                    // markers: true,
                    scrub: true
                }
            })
            tl.to(`.tech-${label}`, {
                display: 'flex',
                translateX: 0,
                duration: 0,
                ease: "expo.in",
            }, "<")
            .to(`.tech-${label} .progress-bar`, {
                width: "100%",
                ease: "sine.inOut"
            }, "<")
            .to(`.tech-${label}-label`, {
                opacity: 1,
                ease: "sine.inOut"
            }, "<")
            .to(`.tech-${label}-icon`, {
                translateY: 0,
                opacity: 1,
                ease: "expo.inOut",
            }, "<")
            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: `.skill-${label}-trigger`,
                    start: "top center",
                    end: "top center",
                    // markers: true,
                    scrub: true
                }
            })
    
            tl2.to(`.tech-${label}`, {
                display: 'none',
            }, ">")
        })
    })
    return (
        <div className='skills-section w-full h-fit p-4 pt-8 pb-[50vh] md:p-20 text-white'>
            <div className='flex sticky top-[5%] md:top[10%] skills opacity-0 mt-5 font-jura w-full'>
                <div className='w-full md:w-2/5'>
                    <AnimatedText start={"top 80%"} end={"top 60%"} containerClass={"skills-animated-title mb-6 text-5xl md:text-8xl font-jaro translate-y-[30px] translate-x-[-30px] opacity-0"} text={"Techincal </b> {icon-0} skills"} icons={[{icon: GiStoneCrafting, props: {className: "text-red-500"}}]}/>
                    {skills.map(({label, title, paragraph}, index) => {
                        const displayDefault = index === 0
                        return <div key={"skill-"+index} className={`skill-${label} flex mb-2 gap-4 ${!displayDefault && "text-[#666666]"}`}>
                            <div className={`flex flex-col items-center`}>
                                <div className='w-5 text-center'>{label}</div>
                                <div className={`scrollbar-${label} w-[3px] min-h-[80px] h-full ${!displayDefault && "hidden"} bg-slate-500 rounded-md`}>
                                    <div className='w-full bg-white h-0 rounded-md'></div>
                                </div>
                            </div>
                            <div className='h-fit'>
                                <h1 className='text-lg font-bold'>{title}</h1>
                                <p className={`skill-${label}-text text-sm opacity-0 ${!displayDefault ? "hidden": "translate-x-0"}`} dangerouslySetInnerHTML={{__html: paragraph}}></p>
                            </div>
                        </div>
                    })}
                    <div className='mt-20 md:hidden'>
                        <Technologies/>
                    </div>
                </div>

                <div className='relative hidden w-3/5 h-[60vh] md:flex justify-center items-center '>
                    <div className='absolute top-[50%]'>
                        <Technologies/>
                    </div>
                    {/* {skills.map(({label, techs}, i) => {
                        if(!techs.length) return
                        return <div key={"tech"+label+i} className={`absolute top-[50%] h-full tech-${label} hidden flex-col`}>
                            <div className='flex gap-6 pb-2 pr-2'>
                                {techs.map(({src}, i) => {
                                    const computedTranslateY = (i+1) * (20) + "px"
                                    return <img key={"tech-img-"+label+i} src={src} loading='lazy' style={{transform: `translateY(${computedTranslateY})`}} className={`tech-${label}-icon opacity-0 z-10 size-12`}/>
                                })}
                            </div>
                            <div className='progress-bar h-[1px] p-[1px] w-0 rounded-sm bg-white'></div>
                            <p className={`tech-${label}-label bg-black pb-40 z-20 opacity-0`}>Technologies</p>
                        </div>
                    })} */}
                </div>
            </div>
            <div className='scroll-triggers'>
                {skills.map(({label}, i) => {
                    return <>
                        <div key={label+i} className={`w-full h-5 ${i === 0 ? 'mt-[20vh] md:mt-[50vh]' : 'mt-[50vh]'} skill-scroll-trigger skill-${label}-trigger ${i === skills.length-1 ? "mb-[50vh]": "mt-[50vh]"}`}></div>
                        {i === skills.length - 1 && <div className='sticky '></div>}
                    </>
                })}
            </div>
            <div className='sticky'></div>
        </div>
    );
}

export default Skills;
