import Router from 'koa-router';
import { getRedisUserInfo } from '../controllers/a';

const router = new Router();

router.get('/getRedisUserInfo', getRedisUserInfo);

module.exports = router;
