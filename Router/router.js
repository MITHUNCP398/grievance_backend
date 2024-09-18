const express = require('express');
const router = express.Router();
const userController = require('../Controller/usercontroller');
const jwtMidddleware = require('../Middleware/jwtmiddleware');
const projectController= require('../Controller/projectcontroller');



//login
router.post('/user/login',userController.login)
//register
router.post('/user/register',userController.register)

//addgrievance
router.post('/addgrievance', projectController.addGrievance)

//get addgrievance

router.get('/getgrievance',projectController.getgrievances)
router.delete('/deletegrievance/:id',projectController.deletegrievance)


module.exports=router