const express = require('express')

// moved to connection.js
// const knex = require('knex')
const db = require('../data/connection.js')

// moved to knex init
// const db = knex({
//   client: 'sqlite3', // db driver
//   connection: {
//     filename: './data/produce.db3', // from root folder
//   },
//   useNullAsDefault: true, // used only for SQLite
// })

const router = express.Router()

router.get('/', (req, res) => {
  db('fruits')
    .then(fruits => {
      res.json(fruits)
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Failed to retrieve fruits', error: err.message })
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  db('fruits')
    .where({ id })
    .first()
    .then(fruit => {
      res.json(fruit)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve fruit' })
    })
})

router.post('/', (req, res) => {
  const fruitData = req.body
  db('fruits')
    .insert(fruitData)
    .then(ids => {
      db('fruits')
        .where({ id: ids[0] })
        .then(newFruitEntry => {
          res.status(201).json(newFruitEntry)
        })
    })
    .catch(err => {
      console.log('POST error', err)
      res.status(500).json({ message: 'Failed to store data' })
    })
})

module.exports = router
