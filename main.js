const fs = require("node:fs");

const outputTxtFile = 'output.txt';

function filterAndWriteData(data, outputFilePath) {
    const filteredData = data.filter(item => item.ku === '13' && item.value > 5);
    const formattedData = filteredData.map(item => item.value + '\n');
    fs.writeFile(outputFilePath, formattedData.join(''), (err) => {
        if (err === null) {
            console.log('Success.');
        } else {
            console.log(err);
        }
    });
}

fs.readFile("data.json", "utf-8", (err, data) => {
    if (err === null) {
        const json = JSON.parse(data);
        filterAndWriteData(json, outputTxtFile);
    } else {
        console.log(err);
    }
});