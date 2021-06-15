export function getNameFromPath(path) {
    return path.replace(/\.json$/, '').replace(/^.*[\\\/]/, '', '')
}
