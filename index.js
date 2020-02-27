const nanoexpress = require('nanoexpress-pro/cjs/nanoexpress');
const Route = require('nanoexpress-pro/cjs/Route');

const app = nanoexpress();
const router = new Route();

function requestHandler(req, res) {
  throw new Error('failed');
}

function errorHandler(err, req, res) {
  console.log('Something was wrong');
  res.send({ message: err.message })
}

app.setErrorHandler(errorHandler);
app.use('/', router);
router.get('/', requestHandler);

app.listen(4000);
