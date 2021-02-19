const express = require('express');
const router = express.Router();

// @route GET  api/contacts
// @desc  Get all users contacts
// @access Private
router.get('/', (req,res) => {
    res.send('Get all Contacts');
});


// @route POST  api/contacts
// @desc  Add new contact
// @access Private
router.post('/', (req,res) => {
    res.send('Add Contact');
});


// @route PUT  api/contacts
// @desc  Update contact
// @access Private
router.get('/', (req,res) => {
    res.send('Update contact');
});
module.exports = router;


// @route DELETE  api/contacts
// @desc  Delete contact
// @access Private
router.get('/', (req,res) => {
    res.send('Delete Contact');
});

module.exports = router;