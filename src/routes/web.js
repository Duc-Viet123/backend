const express = require('express')
const {getHomepage , getabc} = require('../controllers/homeControllers')
const router = express.Router()
 



router.get('/',getHomepage )
    
router.get('/abc',getabc )
  
module.exports = router