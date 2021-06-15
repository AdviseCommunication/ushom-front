const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
    target: 'serverless',
    include: path.resolve(__dirname, 'src/images'),
    webpack(config, options) {
        return config
    }
})
