var router 		  = require('express').Router(),
    controller 	  = require('../controllers/commentsControllers'),
    isLoggedIn	  = require('../middlewares/isLoggedIn');


    router.get('/:postID', controller.find);
    router.get('/find/:userID', controller.find_by_user);
    router.post('/create', controller.create)
    router.post('/update', controller.update)
    router.post('/delete', controller.deleteComment)



module.exports = router