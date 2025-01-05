
const getHomepage = (req, res ) =>
{
    res.send('Hello World!, tdv')
}
const getabc = (req, res ) =>
    {
        res.render('index.ejs')
    }
module.exports = {getHomepage , getabc}