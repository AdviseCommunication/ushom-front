import React, {useEffect, useState} from "react"

const LoaderIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44" height="44" viewBox="0 0 44 44"
        className="stroke-current w-16 h-16 md:w-32 md:h-32 text-primary animate-pulse"
    >
        <g fill="none" fillRule="evenodd" strokeWidth="2">
            <circle cx="22" cy="22" r="1">
                <animate
                    attributeName="r"
                    begin="0s"
                    calcMode="spline"
                    dur="1.8s"
                    keySplines="0.165, 0.84, 0.44, 1"
                    keyTimes="0; 1"
                    repeatCount="indefinite"
                    values="1; 20"
                ></animate>
                <animate
                    attributeName="stroke-opacity"
                    begin="0s"
                    calcMode="spline"
                    dur="1.8s"
                    keySplines="0.3, 0.61, 0.355, 1"
                    keyTimes="0; 1"
                    repeatCount="indefinite"
                    values="1; 0"
                ></animate>
            </circle>
            <circle cx="22" cy="22" r="1">
                <animate
                    attributeName="r"
                    begin="-0.9s"
                    calcMode="spline"
                    dur="1.8s"
                    keySplines="0.165, 0.84, 0.44, 1"
                    keyTimes="0; 1"
                    repeatCount="indefinite"
                    values="1; 20"
                ></animate>
                <animate
                    attributeName="stroke-opacity"
                    begin="-0.9s"
                    calcMode="spline"
                    dur="1.8s"
                    keySplines="0.3, 0.61, 0.355, 1"
                    keyTimes="0; 1"
                    repeatCount="indefinite"
                    values="1; 0"
                ></animate>
            </circle>
        </g>
    </svg>
)

const Loader = () => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 500)
    }, [])

    return !loaded ? (
        <div id="loader"
             className={[
                 "fixed z-50 inset-0 bg-gray flex items-center justify-center",
                 "transition duration-300 opacity-100 pointer-events-none"
             ].join(' ')}
             aria-hidden={"true"}
        >
            <LoaderIcon />
        </div>
    ) : null
}

export default Loader
