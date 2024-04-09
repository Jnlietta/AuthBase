const isLogged = (req, res, next) => {
    if (req.originalUrl === '/user/no-permission') {
        next();
    }
    else if (req.user) {
        next();
    } else {
        res.redirect('/user/no-permission');
    }
};

module.exports = isLogged;
