// models/jobModel.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  // Field 1: Define a property for 'title' with a String data type
  // Field 2: Define a property for 'company' with a String data type
  // Field 3: Define a property for 'location' with a String data type
  // Field 4: Define a property for 'description' with a String data type
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
