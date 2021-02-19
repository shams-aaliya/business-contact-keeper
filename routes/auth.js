const express = require('express');
const router = express.Router();

// @route GET api/auth
// @desc  Get logged in user
// @access Private
router.get('/', (req,res) => {
    res.send('Get logged in a user');
});

// @route POST api/auth
// @desc  Auth User &get token
// @access Public
router.post('/', (req,res) => {
    res.send('Login a user');
});

module.exports = router;