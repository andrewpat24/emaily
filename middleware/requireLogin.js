module.exports = (req, res, next) => {
    if(!req.user) {
        return res.status(401).send({
            error: 'User must be logged in to perform this action.'
        });
    } 

    next(); 
}