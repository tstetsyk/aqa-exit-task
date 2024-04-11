const router = require('express').Router()
let User = require('../models/user.model')
const fs = require('fs');
/**
 * tags:
 *  - name: Users
 *    description: Users routes
 */

// TODO add update route

/**
 * @swagger
 * /users:
 *   get:
 *    tags:
 *      - users
 *    description: Get all users
 *    responses:
 *      '200':
 *        description: "Success"
 *      '400':
 *        description: "Fail"
 *      '500':
 *        description: "Internal server error"
 */
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

/**
 * @swagger
 * /users/add:
 *   post:
 *    tags:
 *      - users
 *    description: Add new user
 *    component: Users
 *    parameters:
 *          - in: body
 *            name: body
 *            schema:
 *              type: object
 *              required:
 *                - username
 *              properties:
 *                  username:
 *                      type: string
 *    responses:
 *      '200':
 *        description: "Success"
 *      '400':
 *        description: "Fail"
 *      '500':
 *        description: "Internal server error"
 */
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({ username: username})

    newUser.save()
        .then(() => res.json({
            status: 'success',
            username: username
        }))
        .catch(err => res.status(400).json('Error: ' + err))
})

/**
 * @swagger
 * /users/{username}:
 *   delete:
 *    tags:
 *      - users
 *    description: Delete user by name
 *    component: Users
 *    parameters:
 *          - in: path
 *            name: username
 *            required: true
 *            schema:
 *              type: string
 *              required: true
 *              properties:
 *                  username:
 *                      type: string
 *    responses:
 *      '200':
 *        description: "Success"
 *      '400':
 *        description: "Fail"
 *      '500':
 *        description: "Internal server error"
 */
router.route('/:username').delete((req, res) => {
    User.findOneAndDelete({username: req.params.username})
        .then((user) => res.json({
            status: 200,
            message: 'user deleted',
            userId: user._id
        }))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/download').get(async (req, res) => {
    await _saveUsersToFile('download_users.json');

    res.download('./download_users.json', (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
})
_saveUsersToFile = async (fileName) => {
    let allUsers = await User.find();
    let users = await allUsers.map(user => {
        let rObj = {}
        rObj["username"] = user.username
        return rObj;
    });
    const finalObj = {
        fileName: fileName,
        users: users
    }

    return fs.writeFileSync(`./${fileName}`, JSON.stringify(finalObj));
}
module.exports = router