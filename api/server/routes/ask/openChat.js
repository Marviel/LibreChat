const express = require('express');
const AskController = require('~/server/controllers/AskController');
const { addTitle, initializeClient } = require('~/server/services/Endpoints/openAI');
const {
  handleAbort,
  setHeaders,
  validateEndpoint,
  buildEndpointOption,
} = require('~/server/middleware');

const router = express.Router();

router.post('/abort', handleAbort());

router.post('/', validateEndpoint, buildEndpointOption, setHeaders, async (req, res, next) => {
  console.log('HIT ROUTE');
  await AskController(req, res, next, initializeClient, addTitle);
});

module.exports = router;
