const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

module.exports = {
    
    testRoute: (req, res) => {
        console.log('test Route')
        res.json({msg: 'ho, ho, ho'})
    },

    create: (req, res) => {
        console.log('created req.body', req.body)
        User.create(req.body)
        .then(created => {
            console.log('createdUser', created)
            res.json(created)
        })
    },

    delete: (req, res) => {
        console.log('req.params', req.params)
        User.findByIdAndDelete(req.params.id)
        .then((deleted) => {
            console.log('deleted', deleted)
        })
    },

    getUsers: (req, res) => {
        console.log('getUsers', get)
        User.find()
        .then((found) => {
            console.log('foundGet', found)
            res.json(found)
        })  
    },
    
   update: (req, res) => {
        console.log('editUsers', put)
        User.find()
        .then((found) => {
            console.log('foundEdit', found)
            res.json(found)
        })
    }

    
}