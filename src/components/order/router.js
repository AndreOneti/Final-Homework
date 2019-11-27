const router = require('express').Router();

const { GetRout, GetByIdRout, PostRout, DeleteRout, PatchRout } = require('./controller/index');

router.get('/', GetRout);
router.post('/', PostRout);
router.get('/:id', GetByIdRout);
router.patch('/:id', PatchRout);
router.delete('/:id', DeleteRout);

module.exports = (app) => app.use('/order', router);
