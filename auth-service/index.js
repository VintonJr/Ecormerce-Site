const express = require('express');
const app = express();
const cors=require('cors')
const dotenv = require('dotenv');

dotenv.config();


const userRouter = require('../auth-service/routes/authentication')

const updateRouter = require('../auth-service/routes/userProfileUpdate')



const bodyParser = require('body-parser');
const { request } = require('express');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.use('/', userRouter)

app.use('/', updateRouter)





app.use((req, res, next) => {
    const error = new Error("Error");
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    return res.json({
        status: err.status,
        success: false,
        message: err.message
    })
})


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})