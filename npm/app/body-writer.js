'use strict';

var $ = require('jquery');

module.exports.write = function() {
  $('body').text('jQuery imported as a Node module');
};
