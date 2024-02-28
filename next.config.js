const path = require('path')

module.exports = {
    env: {
        BACKEND_API: 'http://api-petworld.docker.localhost',
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}