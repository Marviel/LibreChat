const { handleError } = require('../utils');

function validateEndpoint(req, res, next) {
  const { endpoint } = req.body;

  if (!req.body.text || req.body.text.length === 0) {
    return handleError(res, { text: 'Prompt empty or too short' });
  }

  const pathEndpoint = req.baseUrl.split('/')[3];
  console.log('pathEndpoint', pathEndpoint);
  console.log('endpoint', endpoint);

  if (endpoint !== pathEndpoint) {
    return handleError(res, { text: 'Illegal request: Endpoint mismatch' });
  }

  next();
}

module.exports = validateEndpoint;
