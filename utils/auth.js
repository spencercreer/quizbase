const withAuth = (req, res, next) => {
    console.log(req.session)
    if (!req.session.userId) {
        console.log('User must login first')
        res.redirect('/login')
    } else {
        next();
    }
}

module.exports = withAuth