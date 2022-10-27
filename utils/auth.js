const withAuth = (req, res, next) => {
    console.log(req.session)
    if (!req.session.userId) {
        console.log('User must login first')
        res.render('login')
    } else {
        next();
    }
}

module.exports = withAuth
