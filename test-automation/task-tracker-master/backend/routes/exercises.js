const router = require('express').Router()
let Exercise = require('../models/exercise.model')

const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '../public')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})
const upload = multer({storage: storage})

/**
 * tags:
 *  - name: Exercises
 *    description: Exercises routes
 */

/**
 * @swagger
 * /exercises:
 *   get:
 *    description: Get all exercises
 *    tags:
 *      - exercises
 *    responses:
 *      '200':
 *        description: "Success"
 *      '400':
 *        description: "Fail"
 *      '500':
 *        description: "Internal server error"
 */
router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err))
})

/**
 * @swagger
 * /exercises/add:
 *   post:
 *    tags:
 *      - exercises
 *    description: Add new exercises
 *    component: Exercise
 *    parameters:
 *          - in: body
 *            name: body
 *            schema:
 *              type: object
 *              required:
 *                - username
 *                - description
 *                - duration
 *                - date
 *              properties:
 *                  username:
 *                      type: string
 *                  description:
 *                      type: string
 *                  duration:
 *                      type: number
 *                  date:
 *                      type: string
 *                      example: 2021-09-07T13:34:43.619Z
 *    responses:
 *      '200':
 *        description: "Success"
 *      '400':
 *        description: "Fail"
 *      '500':
 *        description: "Internal server error"
 */
router.route('/add').post((req, res) => {
    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    })

    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json(`Error:  ${err}`))
});

/**
 * @swagger
 * /exercises/{id}:
 *   get:
 *    description: Get exercise by id
 *    tags:
 *      - exercises
 *    component: Exercise
 *    parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            schema:
 *              type: string
 *              required: true
 *              properties:
 *                  id:
 *                      type: string
 *    responses:
 *      '200':
 *        description: "Success"
 *      '400':
 *        description: "Fail"
 *      '500':
 *        description: "Internal server error"
 */
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

/**
 * @swagger
 * /exercises/{id}:
 *   delete:
 *    tags:
 *      - exercises
 *    description: Delete exercise by id
 *    component: Exercise
 *    parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: string
 *              required: true
 *              properties:
 *                  id:
 *                      type: string
 *    responses:
 *      '200':
 *        description: "Success"
 *      '400':
 *        description: "Fail"
 *      '500':
 *        description: "Internal server error"
 */
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

/**
 * @swagger
 * /exercises/update/{id}:
 *   post:
 *    tags:
 *      - exercises
 *    description: Add new exercises
 *    component: Exercise
 *    parameters:
 *          - in: path
 *            name: id
 *          - in: body
 *            name: body
 *            schema:
 *              type: object
 *              required:
 *                - username
 *                - description
 *                - duration
 *                - date
 *              properties:
 *                  username:
 *                      type: string
 *                  description:
 *                      type: string
 *                  duration:
 *                      type: number
 *                  date:
 *                      type: string
 *                      example: 2021-09-07T13:34:43.619Z
 *    responses:
 *      '200':
 *        description: "Success"
 *      '400':
 *        description: "Fail"
 *      '500':
 *        description: "Internal server error"
 */
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username
            exercise.description = req.body.description
            exercise.duration = Number(req.body.duration)
            exercise.date = Date.parse(req.body.date)

            exercise.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json(`Error: ${err}`))
        }).catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router