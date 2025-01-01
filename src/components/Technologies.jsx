import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react';
import gsap from "gsap"

const rows = [
    [{name: "Docker", className:""}, {name: "MongoDB", className:""}],
    [{name: "Python", className: "top-[-4pxf]"}, {name: "C++", className: "top-[8pfx] left-[8pxf]"}, {name: "MySQL", className: "top-[-4pxf]"}],
    [{name: "Nginx", className: "left-[32pxf]"}, {name: "HTML" , className: "left-[40pxf]"}, {name: "CSS", className: "top-[-10pxf] left-[32pxf]"}],
    [{name: "JavaScript", className: "left-[32pxf]"}, {name: "jQuery", className: "left-[32pxf]"}]
]

const Tech = ({tech, setTechs, rowIndex, index, containerRef, techId}) => {
    const techRef = useRef()
    console.log(containerRef)
    console.log(rowIndex % 2 === 0)
    // const borderStyle = "box-"+(Math.floor(Math.random() * 3) + 1)
    useGSAP(() => {
        const tl = gsap.timeline({repeat: -1})
        if(containerRef.current && techRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const boxWidth = techRef.current.offsetWidth
            const delay = rowIndex % 2 ? index * 1.5 : index * 1
            tl.to(`.tech-${rowIndex}-${index}-${techId}`, {
                x: `${rowIndex % 2 == 0 ? "-": "+"}=${containerWidth + boxWidth+50}`,
                duration: 5,                        
                repeat: -1,                         
                ease: "sine.out",                     
                delay,                              
                modifiers: {
                  x: (x) => {
                    const numericX = parseFloat(x);
                    const techX = techRef.current.offsetLeft
                    const normalizedX = numericX % (containerWidth + boxWidth + 50)
                    return   rowIndex % 2 != 0 ? normalizedX - 50 - techX - boxWidth + "px":
                    normalizedX - 50 - techX + boxWidth+containerWidth + "px";
                  }
                }
              });
        } else {
            console.log("failed to attatch animation: ")
        }
    }, [])

    return <div ref={techRef} className={`tech-${rowIndex}-${index}-${techId} box-2 relative flex justify-center ${tech.className} rounded-md bg-slate-300 text-black`}>
        <div className={`  text-2xl`}>
            {tech.name} 
        </div>
    </div>
}

const Technologies = () => {
    const [techs, setTechs] = useState(rows)
    const containerRefs = useRef([])
    return (
        <div className=''>
            {techs.map((row, j) => {
                containerRefs.current[j] = containerRefs.current[j] || React.createRef();
                return <div key={"row-"+j} ref={containerRefs.current[j]} className='relative overflow-x-hidden technologies flex gap-4 mb-4 justify-center w-[400px] h-auto  overflow-y-visible '>
                    {row.map((tech, i) => {
                        const techId = Math.floor(Math.random()*100000)
                        return <Tech key={"tech-"+i} tech={tech} techId={techId} rowIndex={j} index={i} containerRef={containerRefs.current[j]}/>
                    })}
                </div>
            })}
        </div>
    );
}

export default Technologies;
