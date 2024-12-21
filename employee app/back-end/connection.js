const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Amarnath:Amarnath@cluster0.yxktv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected aayi mone!');
})
    .catch ((err) => {
    console.log(err);
    })