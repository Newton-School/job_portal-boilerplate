const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  // Field 1: Define a property for 'job' with a reference to the 'Job' model
  // Field 2: Define a property for 'applicantName' with a String data type
  // Field 3: Define a property for 'applicantEmail' with a String data type
  // Field 4: Define a property for 'coverLetter' with a String data type
  // Field 5: Define a property for 'applicationDate' with a Date data type
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
