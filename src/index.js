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
    // 
       const tweet = await tweetRepo.getAll(1,1);
       console.log(tweet[0].contentWithEmail);
});
