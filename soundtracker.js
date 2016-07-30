var config = require('./config');

var Maki = require('maki');
var soundtracker = new Maki(config);

soundtracker.define('Snapshot', {
  attributes: {
    timestamp: { type: Date , default: Date.now , required: true },
    metrics: {
      listeners: { type: Number }
    }
  }
});

soundtracker.start();
