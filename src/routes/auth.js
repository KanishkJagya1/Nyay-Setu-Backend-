const router = require("express").Router();
const UserController = require("../controllers/auth");


router.post('/registeration',UserController.register)

module.exports = router;