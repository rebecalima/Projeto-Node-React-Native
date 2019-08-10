const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){
        const { devid } = req.params;
        const { userid } = req.headers;

        loggerDev = await Dev.findById(userid);
        targetDev = await Dev.findById(devid);

        if(!targetDev)
            return res.json( { "error": "Dev não existe" } );

        loggerDev.dislikes.push(targetDev._id);
        await loggerDev.save();
        return res.json(loggerDev);
    },
    async delete(req, res){
        const { userid } = req.headers;
        const loggerDev = await Dev.findById(userid);

        loggerDev.dislikes = [];
        await loggerDev.save();
        return res.json(loggerDev);
    }
}