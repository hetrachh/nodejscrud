/**
 * @openapi
 * /user:
 *  get:
 *    tags:
 *     - User
 *    summary: List user
 *    description: get users
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

exports.createItem = (req, res) => {
    const data = req.body
    res.status(200).json({'data':data,'message': 'Item created!'})
}

exports.readItem = (req, res) => {
    const id = req.params.id
    res.status(200).json({'data' : {'id': id},'message': 'Item read!'})
}

exports.updateItem = (req, res) => {
    const id = req.params.id
    res.status(200).json({'data' : {'id': id},'message': 'Item update!'})
}

exports.deleteItem = (req, res) => {
    const id = req.params.id
    res.status(200).json({'data' : {'id': id},'message': 'Item deleted!'})
}