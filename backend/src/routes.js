const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

/*routes.post('/devs', (req, res) => {
    return res.json()
});*/
routes.post('/devs', DevController.store);
routes.post('/devs/:devid/likes', LikeController.store);
routes.post('/devs/:devid/dislikes', DislikeController.store);

routes.get('/devs', DevController.index);

routes.delete('/devs/likes/delete', LikeController.delete);
routes.delete('/devs/dislikes/delete', DislikeController.delete);

module.exports = routes;