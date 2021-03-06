const _ = require('lodash'),
  baseConfig = require('./base.conf');

exports.config = _.merge(baseConfig.config, {
  baseUrl: 'https://www.leaseplan.com',
  specs: [
    './features/NL/navigation.feature',
    './features/NL/client-service.feature'
  ],
  capabilities: [{
    maxInstances: 1,
  }],
  reporters: [],
  reporterOptions: {
  },
});
