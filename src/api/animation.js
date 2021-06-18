export const staggerChildrenVariants = {
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: .5
        }
    },
    hidden: {
        transition: {
            staggerChildren: 0.075,
            staggerDirection: -1
        }
    }
}

export const staggerBigChildrenVariants = {
    visible: {
        transition: {
            staggerChildren: 0.5,
            delayChildren: 1
        }
    },
    hidden: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}

export const staggeredChildrenVariants = {
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    hidden: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
}

export const fadeInVariants = {
    visible: {
        opacity: 1,
        transition: { delay: .25 }
    },
    hidden: {
        opacity: 0,
        transition: { delay: .25 }
    },
}

export const slideUpVariants = {
    visible: {
        y: 0,
        transition: { delay: .25 }
    },
    hidden: {
        y: "100%",
        transition: { delay: .25 }
    },
}

export const slideDownVariants = {
    visible: {
        y: 0,
        transition: { delay: .25 }
    },
    hidden: {
        y: "-100%",
        transition: { delay: .25 }
    },
}
