export const bgColorMap = {
    white: 'bg-white',
    primary: 'bg-primary',
    black: 'bg-black',
    gray: 'bg-gray',
    light: `bg-light`,
}

export const computeBgColor = (k) => {
    return bgColorMap[k] ? bgColorMap[k] : bgColorMap.primary
}

export const textColorMap = {
    white: 'text-white',
    primary: 'text-primary',
    black: 'text-black',
    gray: 'text-gray',
}

export const computeTextColor = (k) => {
    return textColorMap[k] ? textColorMap[k] : textColorMap.primary
}
