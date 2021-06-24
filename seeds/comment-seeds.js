const {Comment} = require('../models');

const commentData = [
    {
        comment: 'lol you fooled me!',
        user_id: '2',
        post_id: '1', 
    },
    {
        comment: 'wow just saw it!',
        user_id: '1',
        post_id: '2', 
    },
    {
        comment: 'Should average 20 minutes, very fast!',
        user_id: '4',
        post_id: '3', 
    },
    {
        comment: 'I know a great one, call me (xxx)-(xxx)-(xxxx)!',
        user_id: '3',
        post_id: '4', 
    },
    {
        comment: 'I have the same one!',
        user_id: '6',
        post_id: '5', 
    },
    {
        comment: 'We can study together on the weekends!',
        user_id: '5',
        post_id: '6', 
    },

];


const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;