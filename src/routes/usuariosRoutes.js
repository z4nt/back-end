const express = require('express')
const userController = require('../controllers/usuariosController')
const authController = require('../controllers/authController')
const router = express.Router();
const auth = require('../middlewares/authMiddleware')

router.post('', userController.createUser)
router.get('/listar/:id', auth.authentication,userController.listUserId)
router.get('/listar', auth.authentication,userController.listUser)
router.put('/atualizar', auth.authentication, userController.updateUser)
router.delete('/deletar/:id', auth.authentication, userController.deleteUser)
router.post('/token', authController.login)

module.exports = router