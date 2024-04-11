const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUiExpress = require('swagger-ui-express')
const fileUpload = require('express-fileupload');

const app = express();
const port = process.env.PORT;
const swaggerOptions = {
    definition: {
        info: {
            title: 'Exercise tracker api docs',
            description: 'Exercise tracker api docs',
        },
        servers: [`https://localhost:${port}`]
    },
    apis: ["routes/*.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs))

app.use(cors());
app.use(express.json());
app.use(fileUpload({
    createParentPath: true
}));


const uri = process.env.MONGO_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => console.log("MongoDB database connection established successfully"))


const exercisesRouter = require('./routes/exercises')
app.use('/exercises', exercisesRouter);

const userRouter = require('./routes/users')
app.use('/users', userRouter);

const fileRouter = require('./routes/files');
app.use('/files', fileRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
