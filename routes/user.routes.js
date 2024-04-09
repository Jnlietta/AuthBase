const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
        const image = req.user._json.picture;
        res.render('logged', { image: image , name: req.user.displayName });
});

router.get('/profile', (req, res) => {
        res.render('profile')
});

router.get('/profile/settings', (req, res) => {
        res.render('profileSettings')
});

router.get('/no-permission', (req, res) => {
    res.render('noPermission');
});


module.exports = router;