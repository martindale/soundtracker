process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var rest = require('restler');

var SOUNDTRACK_HOST = 'localhost:13000';
var TRACKING_HOST = 'localhost:13010';

var endpoint = 'http://' + SOUNDTRACK_HOST + '/listeners.json';
var snapshots = 'http://' + TRACKING_HOST + '/snapshots';

rest.get(endpoint).on('complete', function(listeners) {
  if (!listeners || !(listeners instanceof Array)) return;
  rest.postJson(snapshots, {
    metrics: {
      listeners: listeners.length
    }
  });
});
