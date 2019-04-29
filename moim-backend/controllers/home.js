/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.send({ hello: 'world' });
};
