// Imports
const router = require("express").Router();
const { BlogPost, User, Comment } = require("../models");
const withAuth = require("../utils/auth");


//Get all Blogposts and join with user/comments to render on homepage
router.get('/', async, (res, req) => {

});

//Find a single BlogPost

router.get('/blogPost/:id', async, (res,req) => {

});

