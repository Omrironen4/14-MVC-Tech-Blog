// import routes
const router = require('express').Router();
const apiRoutes = require('./api');
const dashRoutes = require('./dashboard-routes');
const homeRoutes = require('./home-routes');

// prefix all routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashRoutes);

module.exports = router;