const express = require('express');
const categories = require('./data/categories.json');
const news = require('./data/news.json')
const cors = require('cors');

// 
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// 
app.get('/', (req, res) => {
    res.send('Assignment 10 is coming soon');
});

// 
app.get('/news-categories', (req, res) => {
    res.send(categories)
});

// 
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    if (id == 08) {
        res.send(news)
    }
    else {
        const newsCategory = news.filter(n => n.category_id === id);
        res.send(newsCategory)
    }
})

// 
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews)
})


app.listen(port, () => {
    console.log('Assignment 10 is running on port', port);
})