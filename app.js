const express = require('express')
const app = express()
const user = require('./routes/user.route')
const cors = require('cors')
const swaggerUI = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
//const SwaggerDocument = require('./swagger')
require("dotenv/config")

app.use(cors())
app.options('*', cors())
app.use(express.json())

const apiUrl = process.env.API_URL
SwaggerDocument = {
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
                url: 'http://localhost:8000/api/',
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
    apis: ['./controller/*.controller*.js']
}
const swaggerDocs = swaggerJsdoc(SwaggerDocument)
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.use(`${apiUrl}/user`, user)
const PORT = 8000

console.log(apiUrl)

app.listen(
    PORT,
    console.log('Hello')
)
