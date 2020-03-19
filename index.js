const nanoexpress = require('nanoexpress-pro/cjs/nanoexpress');
const Route = require('nanoexpress-pro/cjs/Route');

const app = nanoexpress();
const router = new Route();

app.setErrorHandler((err, req, res) => {
  res.send({ error: err.message });
});

app.use('/', router);
router.get('/foo', async (req, res) => {
  throw new Error('Something was wrong in GET /foo');
  res.send({ status: 'success' });
});
router.get('/bar', async () => {
  throw new Error('Something was wrong in GET /bar');
});

app.listen(4000);
