const express = require('express')
const Controller = require('../controllers/categoriaController')
const router = express.Router()

router.get('/search', Controller.list)
router.get('/:id', Controller.listId)
router.post('',Controller.create)
router.put('/:id',Controller.update)
router.delete('/:id', Controller.deletar)

module.exports = router


// function chuchu(){
//     fetch('http://localhost:10000/v1/user', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             firstname: 'chuchu',
//             surname: 'chuchu',
//             email: 'chuchu',
//             password: 'chuchu'
//         }),
//     }).then((res)=>res.json()).then((data)=>console.log(data))
// }