import combineRouters from 'koa-combine-routers';
import a from './a';
import b from './b';

const registerRouter = combineRouters(
	a,
	b
)

export default registerRouter;
