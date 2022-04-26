/** @type {import('next').NextConfig} */
const path = require('path')
const withSass = require('@zeit/next-sass');
const nextConfig = {reactStrictMode: true}
module.exports = nextConfig
module.exports = withSass({
cssModules: true
})
module.exports = {
/* Add Your Scss File Folder Path Here */
sassOptions: {
includePaths: [path.join(__dirname, 'styles')],
},
}