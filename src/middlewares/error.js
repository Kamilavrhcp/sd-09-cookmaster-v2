const errors = {
  badRequest: { status: 400, message: 'Invalid entries. Try again.' },
  conflict: { status: 409, message: 'Email already registered' },
  fieldNotFound: { status: 401, message: 'All fields must be filled' },
  unauthorized: { status: 401, message: 'Incorrect username or password' },
  jwtError: { status: 401, message: 'jwt malformed' },
  notFound: { status: 404, message: 'recipe not found' },
  invalidUser: { status: 403, message: 'Only admins can register new admins' },
  missingToken: { status: 401, message: 'missing auth token' },
};
  
module.exports = (err, _req, res, _next) => {
  const { message, status } = errors[err.statusCode];

  if (err.isJoi) {
    return res.status(status).json({ message });    
  }

  return res.status(status).json({ message });
};
