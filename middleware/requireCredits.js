module.exports = (req, res, next) => {
    if(req.user.credits < 1) {
        return res.status(403).send({
            error: 'There are insufficient credits to perform this action.'
        });
    } 

    next(); 
}