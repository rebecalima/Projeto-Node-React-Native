const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){
        const { devid } = req.params;
        const { user } = req.headers;

        const loggerDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devid);

        if(!targetDev)
            return res.json( { "mensagem":"Dev não existe" } );

        if(targetDev.likes.includes(loggerDev._id))
            console.log("DEU MATCH");

        loggerDev.likes.push(targetDev._id);
        await loggerDev.save();
        return res.json(loggerDev);
    },
    async delete(req, res){
        const { userid } = req.headers;
        const loggerDev = await Dev.findById(userid);

        loggerDev.likes = [];
        await loggerDev.save();
        return res.json(loggerDev);
    }
}