// Imports
const router = require("express").Router();
const { BlogPost } = require("../../models");
const withAuth = require("../../utils/auth");

router.post('/', withAuth, (req,res) => {

});

router.put('/:id', withAuth, (req, res) => {

});

router.delete('/:id', withAuth, (req, res) => {

});

module.exports = router;