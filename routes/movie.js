import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/movie', (req, res) => {
    res.render('movie', {
        title: 'Movie'
    });
});

export default router;
