/**
 * @swagger
 * components:
 *  schemas:
 *   Users:
 *     type: object
 *     properties:
 *      id:
 *       type: integer
 *       description: the id user
 *      name:
 *        type: string
 *        description: the name user
 *      username:
 *        type: string
 *        description: the username
 *      email:
 *        type: string
 *        description: the email of the user
 *      address:
 *        type: string
 *        description: the address of the user
 *      phone:
 *        type: string
 *        description: the phone of the user
 *      website:
 *        type: string
 *        description: the website of the user
 *      age:
 *        type: integer
 *        description: the age of the user
 *      country:
 *        type: string
 *        description: the country of the user
 *      gender:
 *        type: string
 *        description: the gender of the user
 *     required:
 *      - id
 *      - name
 *      - email
 *     example:
 *      id: 1080371
 *      name: MARIA DE LA LUZ AGULO
 *      username: user-MARI
 *      email: decora@decora-sa.cl
 *      address: ADOLFO LOPEZ MATEOS 2269-A
 *      phone: 208 02 93
 *      website: www.cajasagricolas.com
 *      age: 36
 *      country: MEXICO
 *      gender: F
 */

/**
 * @swagger
 * /api/users:
 *  get:
 *   summary: Get all users
 *   tags: [Users]
 *   responses:
 *    200:
 *      description: all users
 *      content:
 *        application/json:
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Users'
 *    404:
 *      description: users not found
 */

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *   summary: Get a user by id
 *   tags: [Users]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: user id
 *   responses:
 *    200:
 *      description: a user by id
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Users'
 *    404:
 *      description: user not found
 */

/**
 * @swagger
 * /api/users/name/{name}:
 *  get:
 *   summary: Get a user by name
 *   tags: [Users]
 *   parameters:
 *    - in: path
 *      name: name
 *      schema:
 *        type: string
 *      required: true
 *      description: user name
 *   responses:
 *    200:
 *      description: a user by name
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Users'
 *    404:
 *      description: user not found
 */

/**
 * @swagger
 * /api/users:
 *  post:
 *   summary: add a user
 *   tags: [Users]
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          type: object
 *          $ref: '#/components/schemas/Users'
 *   responses:
 *    200:
 *      description: user added
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Users'
 *    404:
 *      description: error to add a product
 */

/**
 * @swagger
 * /api/users:
 *  put:
 *   summary: update a user
 *   tags: [Users]
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          type: object
 *          $ref: '#/components/schemas/Users'
 *   responses:
 *    200:
 *      description: user updated
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Users'
 *    404:
 *      description: error to update a user
 */

/**
 * @swagger
 * /api/users/deleteUser/{id}:
 *  delete:
 *   summary: delete a user
 *   tags: [Users]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: user id
 *   responses:
 *    200:
 *      description: user deleted
 *    404:
 *      description: error to delete a user
 */
