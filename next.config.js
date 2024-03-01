const path = require('path')

module.exports = {
    env: {
        BACKEND_API: 'https://api-petworld.ntloffice.com',
        // BACKEND_API: 'http://api-petworld.docker.localhost',
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
}