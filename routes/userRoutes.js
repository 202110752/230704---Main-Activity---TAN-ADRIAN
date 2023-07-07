const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers'); // Import the userControllers module

router.post('/checkEmail', (req, res) => {
    userControllers.checkEmailExists(req.body)
        .then(resultFromController => res.send(resultFromController))
        .catch(error => res.status(500).send(error));
});

module.exports = router;
