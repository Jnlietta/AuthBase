const isLogged = (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.redirect('/user/no-permission');
    }
};

module.exports = isLogged;
