const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://movie_yonetici:Enes7896547.@ds135394.mlab.com:35394/movie-book', { useNewUrlParser: true });
    mongoose.connection.on('open', () => {
        console.log('MongoDB Çaışıyor');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB Hatası', err);
    })
};