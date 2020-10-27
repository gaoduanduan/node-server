import dev from './dev.env';
import qa from './qa.env';
import prod from './prod.env';

let config;

if (process.env.NODE_ENV === 'dev') config = dev;

if (process.env.NODE_ENV === 'qa') config = Object.assign({}, dev, qa);

if (process.env.NODE_ENV === 'prod') config = Object.assign({}, dev, prod);

export default config;
