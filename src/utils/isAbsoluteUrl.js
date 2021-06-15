export const isAbsoluteUrl = (url) => {
    return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//')
}
