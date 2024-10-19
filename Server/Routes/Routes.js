const userController = require('../Controllers/userControllers')


const User = require('../models/user.model')

module.exports = (app) => {

    app.get('/test', User.test)

    app.get('/getUsers', (req, res) => {
        console.log('foundUsers')
        User.find()
        .then(found => {
            console.log('found', found)
            res.json(found)
        })
    })

    app.delete('/delete/:id', (req, res) => {
        console.log('req.p', req.params)
        User.findByIdAndDelete(req.params.id)
        .then(deleted => {
            console.log('deleted', deleted)
            res.json(deleted)
        })
    })

    app.post('/create', (req, res) => {
        console.log('req.body', req.body)
        User.create(req.body)
        .then(create => {
            console.log('create Route', create)
            res.json(create)
        })
    })

    app.put('/update/:id', (req, res) => {
        console.log('reqBody', req.body)
        User.findByIdAndUpdate(req.params.id, req.body)
        .then(edited => {
            console.log('editUName', edited)
            res.json(edited)
        })
        .catch(err => console.log(err))
        res.status().json({msg: 'Error updating Username', error: err})
    })



}