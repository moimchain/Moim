/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  const token = req.user.tokens.find(token => token.kind === 'facebook');
  res.send({
    hello: 'world',
    token: token
  });
};
