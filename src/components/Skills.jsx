import React, { useRef } from 'react';
import AnimatedText from "./AnimatedText"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Skills = () => {
    const skills = [
        {
            label: "V",
            title: "Maxime mollitia, molestiae quas",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
        },
        {
            label: "IV",
            title: "Maxime mollitia, molestiae quas",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
        }, {
            label: "III",
            title: "Maxime mollitia, molestiae quas",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
        },
        {
            label: "II",
            title: "Maxime mollitia, molestiae quas",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
        },
        {
            label: "I",
            title: "Maxime mollitia, molestiae quas",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
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
                markers: true,
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
                    markers: true,
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
                    markers: true,
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
    return (
        <div className='skills-section w-full h-fit p-2 pt-8 pb-[50vh] md:p-20 text-white'>
            <div className='sticky top-[5%] md:top[10%] skills opacity-0 mt-5 font-jura w-full md:w-[600px]'>
                <AnimatedText start={"top 80%"} end={"top 60%"} containerClass={"skills-animated-title mb-6 text-5xl md:text-8xl font-jaro translate-y-[30px] translate-x-[-30px] opacity-0"} text={"My Skills and </b> technologies"}/>
                {skills.map(({label, title, paragraph}, index) => {
                    const displayDefault = index === 0
                    return <div key={"skill-"+index} className={`skill-${label} flex mb-2 gap-4 ${!displayDefault && "text-[#666666]"}`}>
                        <div className={`flex flex-col items-center`}>
                            <div className='w-5 text-center'>{label}</div>
                            <div className={`scrollbar-${label} w-[3px] h-[80px] ${!displayDefault && "hidden"} bg-slate-500 rounded-md`}>
                                <div className='w-full bg-white h-0 rounded-md'></div>
                            </div>
                        </div>
                        <div className='h-fit'>
                            <h1 className='text-lg font-bold'>{title}</h1>
                            <p className={`skill-${label}-text text-sm opacity-0 ${!displayDefault ? "hidden": "translate-x-0"}`}>{paragraph}</p>
                        </div>
                    </div>
                })}
            </div>
            <div className='scroll-triggers'>
                {skills.map(({label}, i) => {
                    return <>
                        <div key={label+i} className={`w-full h-5 mt-[50vh] skill-scroll-trigger skill-${label}-trigger ${i === skills.length-1 ? "mb-[0]": "mt-[50vh]"}`}></div>
                        {i === skills.length - 1 && <div className='sticky '></div>}
                    </>
                })}
            </div>
            <div className='sticky'></div>
        </div>
    );
}

export default Skills;
