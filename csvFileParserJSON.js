const fs = require('fs');

export default (csvPath) => {

  // The header of the table
  let header = [];
  // The list of json objects
  let jsonList = [];

  //Read the CSV
  fs.readFile(csvPath, 'utf8', (err, data) => {
    processData(data);
  });

  // Split the CSV table into lines
  const processData = (data) => {
    // For taking into account windows line breaks
    dataStrings = data.split(/\r\n|\n/);

    // Init the header
    header = dataStrings[0].split(",");

    // Fill the json list
    for (var i = 1; i < dataStrings.length; i++){
      processLineArray(dataStrings[i].split(","));
    }
    return jsonList;
  }

  // Creates an object from a line and pushes it to the jsonList
  const processLineArray = (line) => {
    let jsonObj = {};
    line.forEach((item, index) => {
      jsonObj[header[index]] = item
    });
    jsonList.push(jsonObj);
  }
}
