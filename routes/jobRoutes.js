const express = require('express');
const jobController = require('../controllers/jobController');
const router = express.Router();

router.get('/jobs', jobController.getJobs);
router.post('/jobs', jobController.createJob);
router.post('/apply/:jobId', jobController.applyForJob);

module.exports = router;
