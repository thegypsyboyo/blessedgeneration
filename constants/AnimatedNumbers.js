
export const  AnimatedNumbers = ({value}) => {
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
      springValue.on("change", (latest) =>{
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

