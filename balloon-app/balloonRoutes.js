module.exports = function (ballons) {


    async function home(req, res) {
        
        res.render('index', {output: await ballons.allColors()})
    }

    async function balloons_(req, res) {
        var colOfBalloons = req.body.theColours
        var difColours = req.body.colours

        await ballons.insertColours(colOfBalloons);
        res.redirect('/');
    }

    return {
        home,
        balloons_,
       
    }
}