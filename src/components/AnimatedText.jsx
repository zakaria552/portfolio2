/* eslint-disable react/prop-types */
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';

const AnimatedText = ({containerClass, text, start, end}) => {
    const textWrapperRef = useRef()
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: textWrapperRef.current,
                start: start,
                end: end,
                markers: false,
                scrub: true
            }
        })
        tl.to(".animated-word, .animated-text", {
            opacity: 1,
            translateX: 0,
            translateY: 0,
            transform: "translate3d(0, 0, 0) rotateX(0) rotateY(0)",
            duration: 0.5,
            ease: "power1.inOut",
            stagger: 0.1
        })
    }, [])
    return (
        <div ref={textWrapperRef} className={`animated-text ${containerClass}`}>
            {text.split("</b>").map((line, i) => {
                return <div key={"line-"+i} className='flex gap-6 md:px-8'>
                    {line.split(" ").map((word, j) => {
                        return <span key={"word-"+j} className='animated-word'>{word}</span>
                    })}
                </div>
            })}
        </div>
    );
}

export default AnimatedText;
