// import routes and models
const router = require('express').Router();
const { Comment, Post, User } = require('../models');

// dashboard route
router.get('/', async(req, res) => {
try {
  const postData = await Post.findAll({
    include: [{ model: User }],
  });
    // serializing the data
  const posts = postData.map((posts) => posts.get({ plain: true }));
  res.render('homepage'), {
      posts,
      logged_in: req.session.logged_in
  }
  res.status(200).json(data);
} catch (err) {
  res.status(500).json(err);
}
});

// new post route
router.get('/create-post', (req, res) => {

});

// edit post route
router.get('/edit-post/:id', async(req, res) => {

});

module.exports = router;