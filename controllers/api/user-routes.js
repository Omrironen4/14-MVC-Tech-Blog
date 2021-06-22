const router = require('express').Router();
const { Comment, Post, User } = require('../../models');
 
// GET all users
router.get('/', async(req, res) => {
try {
  const userData = await User.findAll({
    include: [
      {
        model: Post
      },
      {
        model: Comment
      },
    ]
  });
    // const userArr = userData.map((user) => user.get({ plain: true }));
  res.status(200).json(userData);
  //view page must be filled.
  //  res.render('', {
  //      userArr,
  //      //Middleware loggin validation
  //      loggedIn: req.session.loggedIn
  //  })
} catch (err) {
    console.log(err)
    res.status(500).json(err);
}
});

// GET single user by ID
router.get('/:id', async(req, res) => {
try {
    
    const userData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Post
        },
        {
          model: Comment
        },
      ]
    });
    if (!userData)
    {
        res.status(404).json({ message: 'No User with ID not found' });
        return;
    }
    res.status(200).json(userData);
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

// CREATE new user
router.post('/', async(req, res) => {
try {
    const userData = await User.create({
        ...req.body
    });
    res.status(200).json(userData);
} catch (err) {
    res.status(400).json(err);
}
});

// login
router.post('/login', async(req, res) => {
 try {
   const userData = await User.findOne({ where: { email: req.body.email } });

   if (!userData) {
     res
       .status(400)
       .json({ message: "Incorrect email or password, please try again" });
     return;
   }

   const validPassword = await userData.checkPassword(req.body.password);

   if (!validPassword) {
     res
       .status(400)
       .json({ message: "Incorrect email or password, please try again" });
     return;
   }

   req.session.save(() => {
     req.session.user_id = userData.id;
     req.session.logged_in = true;

     res.json({ user: userData, message: "You are now logged in!" });
   });
 } catch (err) {
   res.status(400).json(err);
 }
});

// logout
router.post('/logout', (req, res) => {
if (req.session.logged_in) {
  req.session.destroy(() => {
    res.status(204).end();
  });
} else {
  res.status(404).end();
}
});

module.exports = router;