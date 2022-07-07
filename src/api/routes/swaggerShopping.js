/**
 * @swagger
 * components:
 *  schemas:
 *   Shopping:
 *     type: object
 *     properties:
 *      id:
 *       type: integer
 *       description: the id shopping
 *      idUser:
 *        type: integer
 *        description: the name of the user
 *      idProduct:
 *        type: string
 *        description: the id of the product
 *      date:
 *        type: string
 *        description: the date of the shopping
 *      quantity:
 *        type: integer
 *        description: the quantity of the shopping
 *     required:
 *      - idUser
 *      - idProduct
 *      - date
 *     example:
 *      id: 1
 *      idUser: 26882554
 *      idProduct: S42716
 *      date: 14/07/22
 *      quantity: 56
 */

/**
 * @swagger
 * /api/shopping:
 *  get:
 *   summary: Get all shoppings
 *   tags: [Shopping]
 *   responses:
 *    200:
 *      description: All shopping
 *      content:
 *        application/json:
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Shopping'
 *    404:
 *      description: Shoppings not found
 */

/**
 * @swagger
 * /api/shopping/{id}:
 *  get:
 *   summary: Get a Shopping by id
 *   tags: [Shopping]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: Shopping id
 *   responses:
 *    200:
 *      description: a Shopping by id
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Shopping'
 *    404:
 *      description: Shopping not found
 */

/**
 * @swagger
 * /api/shopping/products/{id}:
 *  get:
 *   summary: Get a Shopping by id product
 *   tags: [Shopping]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: Shopping by id product
 *   responses:
 *    200:
 *      description: a Shopping by id product
 *      content:
 *        application/json:
 *          schema:
 *            type: array
 *            $ref: '#/components/schemas/Shopping'
 *    404:
 *      description: Shopping not found
 */

/**
 * @swagger
 * /api/shopping/users/{id}:
 *  get:
 *   summary: Get a Shopping by id user
 *   tags: [Shopping]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: Shopping by id user
 *   responses:
 *    200:
 *      description: a Shopping by id user
 *      content:
 *        application/json:
 *          schema:
 *            type: array
 *            $ref: '#/components/schemas/Shopping'
 *    404:
 *      description: Shopping not found
 */

/**
 * @swagger
 * /api/shopping:
 *  post:
 *   summary: add a Shopping
 *   tags: [Shopping]
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          type: object
 *          $ref: '#/components/schemas/Shopping'
 *   responses:
 *    200:
 *      description: Shopping added
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Shopping'
 *    404:
 *      description: error to add a shopping
 */

/**
 * @swagger
 * /api/shopping:
 *  put:
 *   summary: update a shopping
 *   tags: [Shopping]
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          type: object
 *          $ref: '#/components/schemas/Shopping'
 *   responses:
 *    200:
 *      description: Shopping updated
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Shopping'
 *    404:
 *      description: error to update a shopping
 */

/**
 * @swagger
 * /api/shopping/deleteShopping/{id}:
 *  delete:
 *   summary: delete a shopping
 *   tags: [Shopping]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: Shopping id
 *   responses:
 *    200:
 *      description: Shopping deleted
 *    404:
 *      description: error to delete a shopping
 */
