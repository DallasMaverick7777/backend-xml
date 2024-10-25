const fs = require('fs');
const xml2js = require('xml2js');

function parseXMLDatabase(xmlPath, callback) {
  fs.readFile(xmlPath, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }

    xml2js.parseString(data, (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }

      callback(null, result);
    });
  });
}

module.exports = parseXMLDatabase;