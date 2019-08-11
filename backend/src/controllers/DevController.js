const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index(req, res){
        const { user } = req.headers;
        const loggerDev = await Dev.findById(user);
        const devs = await Dev.find({
            $and: [ 
                { _id: { $ne: user } },
                { _id: { $nin: loggerDev.likes } },
                { _id: { $nin: loggerDev.dislikes} }
            ]
        })
        return res.json(devs);
    },
    async store(req, res){
        const { username } = req.body;

        const userExists = await Dev.findOne( {user: username} );

        if(userExists)
            return res.json(userExists);

        const response = await axios.get(`https://api.github.com/users/${username}`)
        .catch(error => {
            return res.json( { "error":"Não foi possivel encontrar o Dev" } );
        });
        const { name, avatar_url: avatar, bio } = response.data;
        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });

        return res.json(dev);
    }
};