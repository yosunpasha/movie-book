import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/movie', (req, res) => {
    res.render('index', {
        title: 'Express'
    });
});

export default router;
