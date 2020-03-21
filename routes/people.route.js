const express = require('express');
const router = express.Router();
const people_controller = require('');

router.get('/people' , people_controller.test);
module.export = router;
