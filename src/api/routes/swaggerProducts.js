/**
 * @swagger
 * components:
 *  schemas:
 *   Products:
 *     type: object
 *     properties:
 *      id:
 *       type: string
 *       description: the id product
 *      name:
 *        type: string
 *        description: the name product
 *      price:
 *        type: number
 *        description: the price product
 *      discount:
 *        type: integer
 *        description: the discount of the product
 *      currency:
 *        type: string
 *        description: the currency to buy the product
 *      availability:
 *        type: string
 *        description: the stock availability
 *      color:
 *        type: string
 *        description: the color of product
 *      idCategory:
 *        type: string
 *        description: the id category of the product
 *      idLocation:
 *        type: number
 *        description: the id location of the product
 *      breadcrumbs:
 *        type: string
 *        description: extra info about the product
 *      description:
 *        type: string
 *        description: description of the product
 *      brand:
 *        type: string
 *        description: the brand of the product
 *      image1:
 *        type: string
 *        description: the url image of the product
 *      image2:
 *        type: string
 *        description: the url image of the product
 *      image3:
 *        type: string
 *        description: the url image of the product
 *      averageRating:
 *        type: integer
 *        description: the average rating of the product
 *     required:
 *      - id
 *      - name
 *      - price
 *      - idCategory
 *      - idLocation
 *     example:
 *      id: BC0770
 *      name: Five Ten Kestrel Lace Mountain Bike Shoes
 *      price: 432
 *      discount: 302
 *      currency: USD
 *      availability: In Stock
 *      color: Black
 *      idCategory: 1
 *      idLocation: 1
 *      breadcrumbs: Men/Clothing
 *      description: Lace up and get after it. The Five Ten Kestrel Lace Mountain Bike Shoes offer efficient pedal power with low-profile style. The wide platform is compatible with all clipless pedals and offers high-friction grip on and off the bike.
 *      brand: Adidas
 *      image1: https://assets.adidas.com/images/w_600,f_auto,q_auto/2b04943c525e4909a7a5a9fa0116153d_9366/Five_Ten_Kestrel_Lace_Mountain_Bike_Shoes_Grey_BC0770_01_standard.jpg
 *      image2: https://assets.adidas.com/images/w_600,f_auto,q_auto/91b253099ece4b6c8b5fa9fa0116a5a1_9366/Five_Ten_Kestrel_Lace_Mountain_Bike_Shoes_Grey_BC0770_04_standard.jpg
 *      image3: https://assets.adidas.com/images/w_600,f_auto,q_auto/a2b39ff910204553af50a9fa0116b3a0_9366/Five_Ten_Kestrel_Lace_Mountain_Bike_Shoes_Grey_BC0770_05_standard.jpg
 *      averageRating: 4
 */

/**
 * @swagger
 * /api/products:
 *  get:
 *   summary: Get all products
 *   tags: [Products]
 *   responses:
 *    200:
 *      description: all products
 *      content:
 *        application/json:
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Products'
 *    404:
 *      description: products not found
 */

/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *   summary: Get a product by id
 *   tags: [Products]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: product id
 *   responses:
 *    200:
 *      description: a product by id
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Products'
 *    404:
 *      description: product not found
 */

/**
 * @swagger
 * /api/products/name/{name}:
 *  get:
 *   summary: Get a product by name
 *   tags: [Products]
 *   parameters:
 *    - in: path
 *      name: name
 *      schema:
 *        type: string
 *      required: true
 *      description: product name
 *   responses:
 *    200:
 *      description: a product by name
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Products'
 *    404:
 *      description: product not found
 */

/**
 * @swagger
 * /api/products/orderByLocation/{idLocation}:
 *  get:
 *   summary: Get products by id Location
 *   tags: [Products]
 *   parameters:
 *    - in: path
 *      name: idLocation
 *      schema:
 *        type: integer
 *      required: true
 *      description: id location of the product
 *   responses:
 *    200:
 *      description: products by id location
 *      content:
 *        application/json:
 *          schema:
 *            type: array
 *            $ref: '#/components/schemas/Products'
 *    404:
 *      description: products not found
 */

/**
 * @swagger
 * /api/products/orderByCategory/{idCategory}:
 *  get:
 *   summary: Get products by id Category
 *   tags: [Products]
 *   parameters:
 *    - in: path
 *      name: idCategory
 *      schema:
 *        type: integer
 *      required: true
 *      description: id category of the product
 *   responses:
 *    200:
 *      description: products by id category
 *      content:
 *        application/json:
 *          schema:
 *            type: array
 *            $ref: '#/components/schemas/Products'
 *    404:
 *      description: products not found
 */

/**
 * @swagger
 * /api/products:
 *  post:
 *   summary: add a product
 *   tags: [Products]
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          type: object
 *          $ref: '#/components/schemas/Products'
 *   responses:
 *    200:
 *      description: product added
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Products'
 *    404:
 *      description: error to add a product
 */

/**
 * @swagger
 * /api/products:
 *  put:
 *   summary: update a product
 *   tags: [Products]
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          type: object
 *          $ref: '#/components/schemas/Products'
 *   responses:
 *    200:
 *      description: product updated
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Products'
 *    404:
 *      description: error to update a product
 */

/**
 * @swagger
 * /api/products/deleteProduct/{id}:
 *  delete:
 *   summary: delete a product
 *   tags: [Products]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: product id
 *   responses:
 *    200:
 *      description: product deleted
 *    404:
 *      description: error to delete a product
 */
