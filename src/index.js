const express = require('express');
const connect = require('./config/database');
const app = express();
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment')
app.listen(3000, async () => {
    console.log('server started');
    await connect();
     console.log('mongodb connected');
     const tweetRepo = new TweetRepository();
    //  const tweet = await tweetRepo.get('6641fae2f1903914694f82b5');
    //  console.log(tweet);
     const tweet = await tweetRepo.create({content: 'Tweet with comment schema'});
     console.log(tweet);
     const comment = await Comment.create({content: 'new comment'});
     tweet.comments.push(comment);
     await tweet.save();
     console.log(tweet);
});
