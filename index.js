'use strict';

exports.printMsg = function() {
  // console.log("lazaness!!!");
}

exports.printNodeVersion = function() {
  console.log(`Node Version: ${process.version}`);
}

exports.printNodeMajorVersion = function() {
  var currentNodeVersions = process.versions;
  // console.log(currentNodeVersions);
  var currentNodeVersion = process.versions.node;
  // console.log(currentNodeVersion);
  var major = currentNodeVersion.split('.')[0];
  // console.log(major);
}

require('./lazaness');
