// courseRoutes.js

const express = require('express');
const router = express.Router();

module.exports = (courseControllers) => {
  // Example route using the courseControllers middleware
  router.get('/:id', courseControllers.getCourse);
  router.post('/', courseControllers.createCourse);

  // Route to handle the POST request for /courses/courseID
  router.post('/:courseID', (req, res) => {
    const { courseID } = req.params;
    // Handle the POST request for a specific course ID
    // Code to process the request and send the response
    res.send(`POST request received for courseID: ${courseID}`);
  });

  return router;
};
