// courseControllers.js

// ...

const getCourse = (req, res) => {
    // Code to handle GET request for a course
  };
  
  const createCourse = (req, res) => {
    // Code to handle POST request to create a course
  };
  
  const createCourseByID = (req, res) => {
    const { courseID } = req.params;
    
    // Check if the courseID is equal to "CS0043"
    if (courseID === "CS0043") {
      // Return true in the response
      res.send(true);
    } else {
      // Return false in the response
      res.send(false);
    }
  };
  
  module.exports = {
    // ...
    getCourse,
    createCourse,
    createCourseByID
  };
  