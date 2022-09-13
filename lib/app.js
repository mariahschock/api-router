import chalk from 'chalk';
import cats from './routes/cats.js';
import candies from './routes/candies.js';
import sauces from './routes/sauces.js';
import notFound from './not-found.js';
// import parser from './bodyParser.js';

const serverLog = (...args) => console.log(chalk.cyan('[server]'), ...args);
const routes = {
  cats,
  candies,
  sauces,
};

export default async function (req, res) {
  const parts = req.url.split('/');
  serverLog(parts);
  if (parts.length && parts[1] === 'api') {
    // req.body = await parser(req);
    const resource = routes[parts[parts.length - 1 ]];
    serverLog(resource);

    const route = resource[req.method.toLowerCase()];
    serverLog('Method:', route);

    route(req, res);
    return;
  }

  notFound(req, res);
}

// export default function (req, res) {
//   const route = req.method.toLowerCase();
//   serverLog('Method:', route);

//   const parts = req.url.split('/');
//   serverLog('URL segments:', parts);

//   const resourcePath = parts[parts.length -1];
//   serverLog('Resource path:', resourcePath);

//   const resource = routes[resourcePath];
//   serverLog('resource:', resource);

//   const handler = resource[route];
//   serverLog('handler:', handler);

//   handler(req, res);

//   notFound(req, res);
// }
