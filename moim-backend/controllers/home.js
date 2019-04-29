/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  let token = "empty"
  if (req.user) {
    token = req.user.tokens.find(token => token.kind === 'facebook');
  }
  res.json({
    hello: 'world',
    auth: token
  });
};
