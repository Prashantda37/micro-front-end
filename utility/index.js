function validateToken(req, res, next) {
  const { authorization } = req.headers;
  if( authorization ) {
    const token = req.headers.authorization.split(' ');
    if (token && token[1]) {
      req.token = token[1];
      next();
    }
  } else {
    res.status(403).send('forbidden');
  }
}

module.exports = {
  validateToken
}