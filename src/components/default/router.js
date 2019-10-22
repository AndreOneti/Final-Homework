const router = require('express').Router();

const { GetRout, PostRout, PatchRout, DeleteRout } = require('./controller/index');

router.get('/', GetRout);
router.post('/', PostRout);
router.patch('/', PatchRout);
router.delete('/', DeleteRout);

module.exports = app => app.use('/', router);
