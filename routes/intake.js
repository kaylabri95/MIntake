const { request } = require('express')
const express = require('express')
const router = express.Router()
const intakeController = require('../controllers/intake')

const emailController = require('../controllers/email');

// @desc    Intake Page
// @route   GET /intake
router.get('/', (req, res) => {
    res.render('intake.ejs')
})

// @desc    Send email on form submit
// @route   PUT /sendEmail
router.put('/sendEmail', emailController.sendEmail);

// @desc    Intake Page
// @route   POST /submitIntake

// Currently just sending this route back to the homepage.  
// This route should have patient authentication.
router.post('/submitIntake', intakeController.submitIntakeForm)

module.exports = router;