const {Comment} = require('../models');

const commentData = [
    {
        user_id: '2',
        body: 'lol you fooled me!',
        post_id: '1', 
    },
    {
        user_id: '1',
        body: 'wow just saw it!',
        post_id: '2', 
    },
    {
        user_id: '4',
        body: 'Should average 20 minutes, very fast!',
        post_id: '3', 
    },
    {
        user_id: '3',
        body: 'I know a great one, call me (xxx)-(xxx)-(xxxx)!',
        post_id: '4', 
    },
    {
        user_id: '6',
        body: 'I have the same one!',
        post_id: '5', 
    },
    {
        user_id: '5',
        body: 'We can study together on the weekends!',
        post_id: '6', 
    },

];


const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;