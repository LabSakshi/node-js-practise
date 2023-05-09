const express = require('express')

const router = express.Router() //this way we can create a router object and then use it inside outr app
const getContact = require('../controllers/contactController')
router.get('/', getContact.getContact)

router.post('/', getContact.postContact) //added middleware
router.get('/:id', getContact.updateContact)

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Contact has been updated ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: 'Contact has been deleted' })
})

module.exports = router