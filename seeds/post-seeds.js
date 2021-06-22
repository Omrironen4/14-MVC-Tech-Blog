const {Post} = require('../models');

const postData = [
    {
        title: 'Checkout the new mysql3!',
        description: 'Just kidding it did not come out yet.',
        user_id: 1,
    },
    {
        title: 'New VSC',
        description: 'have you checkout the new cool color schema? Plus they have a bunch of new extensions available.',
        user_id: 2,
    },
    {
        title: 'Mysql2 update',
        description: 'How long does mysql update take?',
        user_id: 3,
    },
    {
        title: 'Need a tutor for javascript',
        description: 'Who knows a great tutor?',
        user_id: 4,
    },
    {
        title: 'New monitor is next level',
        description: 'I would like to introduce my new monitor to you it is really cool!',
        user_id: 5,
    },
    {
        title: 'Finding a friend for my studies in CS',
        description: 'I would like to find a friend to study CS with on the weekends!', 
        user_id: 6,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;