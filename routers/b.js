import Router from 'koa-router';
import { getUserInfo } from '../controllers/b';

const router = new Router();

router.get('/getUserInfo', getUserInfo);

module.exports = router;