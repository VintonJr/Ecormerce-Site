const userRouter = require('express').Router();
const { register, login,registerAdmin } = require('../controllers/authenticationController')



userRouter.post('/register', register)
userRouter.post('/register/admin', registerAdmin)

userRouter.post('/login', login)




module.exports = userRouter;