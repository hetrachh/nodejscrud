
exports.swaggerDocument = {
    definition: {
        openapi: '3.0.0',
        info: {
            version: '1.0.0',
            title: 'APIs Document',
            description: 'your description here',
            termsOfService: '',
            contact: {
                name: 'Tran Son hoang',
                email: 'son.hoang01@gmail.com',
                url: 'https://hoangtran.co'
            },
            license: {
                name: 'Apache 2.0',
                url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
            }
        },
        servers: [
            {
                url: 'http://localhost:3000/api/',
                description: 'Local server'
            },
            {
                url: 'https://app-dev.herokuapp.com/api/v1',
                description: 'DEV Env'
            },
            {
                url: 'https://app-uat.herokuapp.com/api/v1',
                description: 'UAT Env'
            }
        ],
        components: {
            schemas: {},
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
    },
    apis: ['./routes/user.route*.js']
}
// {
//     "url": "https://{env}.gigantic-server.com:{port}/{basePath}",
//     "description": "The production API server",
//     "variables": {
//         "env": {
//             "default": "app-dev",
//             "description": "DEV Environment"
//         },
//         "port": {
//             "enum": [
//                 "8443",
//                 "3000",
//                 "443"
//             ],
//             "default": "8443"
//         },
//         "basePath": {
//             "default": "v1"
//         }
//     }
// }