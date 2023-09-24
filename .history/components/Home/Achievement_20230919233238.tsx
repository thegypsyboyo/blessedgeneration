import React, { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'


const Achievement = () => {

    const AnimatedNumbers = ({value}:any) => {
        const ref = useRef(null);

        const motionValue = useMotionValue(0);
        const springValue = useSpring(motionValue, {duration: 3000})
        const isInView = useInView(ref, {once: false})

        useEffect(() => {
            if(isInView){
                motionValue.set(value);
            }
        }, [isInView, value, motionValue]);

        useEffect(() => {
          springValue.on("change", (latest:any) =>{
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
            // console.log(latest);
          })
        }, [value,springValue, motionValue]);
        return(
            <span ref={ref}></span>
        )
    }
  return (
    <div>Achievement</div>
  )
}

export default Achievement