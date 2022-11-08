const fs = require('fs')
const path = require('path')
const uploadImageController = {

uploadProjectImage : (req, res) => {
  const rootDirectory = require('path').resolve('./');
  const projectId = req.params.id

    let projectImage;
    let uploadPath;
  
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // The name of the input field is used to retrieve the uploaded file
    projectImage = req.files.projectImage;
    uploadPath = `${rootDirectory}/data/ProjectsImages/project${projectId}-${projectImage.name}`;

    // check if file already exist
    if(fs.existsSync(uploadPath)){
      const error = new Error(`Change the file name`);
      return res.status(400).json({ message: error.message });
    }
  
    // Use the mv() method to place the file somewhere on your server
    projectImage.mv(uploadPath, function(err) {
      if (err)
        return res.status(500).send(err);

        res.status(201).json({path:`/data/ProjectsImages/project${projectId}-${projectImage.name}`})

    });
  }
}

module.exports = uploadImageController