/**
 * @openapi
 * /login:
 *  get:
 *    tags:
 *     - Login
 *    summary: Login user
 *    description: login users
 *    produces:
 *      - application/json
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *          description: List of users
 */
 exports.listItem = (req, res) => {

    res.status(201).json({'message': 'Item listed!'})
}
