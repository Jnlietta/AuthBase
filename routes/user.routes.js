const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
    const loggedUser = req.user;
    if (loggedUser){
        res.render('logged');
    }
    else {
        res.redirect('/no-permission');
    }
});

router.get('/profile', (req, res) => {
    const loggedUser = req.user;
    if (loggedUser){
        res.render('profile')
    }
    else {
        res.redirect('/no-permission');
    }
});

router.get('/profile/settings', (req, res) => {
    const loggedUser = req.user;
    if (loggedUser){
        res.render('profileSettings')
    }
    else {
        res.redirect('/no-permission');
    }
});

router.get('/no-permission', (req, res) => {
    res.render('noPermission');
});


module.exports = router;