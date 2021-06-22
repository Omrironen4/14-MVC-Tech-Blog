// import routes and models
const router = require('express').Router();
const { Comment, Post, User } = require('../models');

const withAuth = require('../utils/auth');

// dashboard route
router.get('/', withAuth, async(req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [{ model: User }]
    });

    // serialize the data
    const posts = postData.map((post) => post.get({ plain: true }));
    
    // res.status(200).json(postData);
    res.render('dashboard', { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});


// new post route
router.get('/create', withAuth, (req, res) => {
  res.render('create-post', { logged_in: req.session.logged_in });
});

// edit post route
router.get('/edit/:id', withAuth, async(req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User, attributes: ['username'] }]
    });

    // serialize the data
    const post = postData.get({ plain: true });

    // res.status(200).json(postData);
    res.render('edit-post', { ...post, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// single post route
// router.get('/posts/:id', async(req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id, {
//       include: [
//         { model: User, }, { model: Comment, include: { model: User }}
//       ]
//     });

//     // serialize the data
//     const post = postData.get({ plain: true });

//     res.render('create-comment', { ...post, logged_in: req.session.logged_in });


//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// login route
// router.get('/login', (req, res) => {
  
//   // if the user is logged in, redirect to forum 
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

// sign up route
// router.get('/signup', (req, res) => {
  
//   // if the user is logged in, redirect to forum 
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }
  
//   res.render('sign-up');
// });

// module.exports = router;