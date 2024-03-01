const path = require('path')

module.exports = {
    env: {
        BACKEND_API: 'https://api-petworld.ntloffice.com',
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}