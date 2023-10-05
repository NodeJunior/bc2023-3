const fs = require("node:fs");

const inputJsonFile = 'data.json';
const outputTxtFile = 'output.txt';

function filterAndWriteData(data, outputFilePath) {
    const filteredData = data.filter(item => item.ku === '13' && item.value > 5);
    const formattedData = filteredData.map(item => JSON.stringify(item, null, 2) + '\n');
    fs.writeFileSync(outputFilePath, formattedData.join(''));
}

fs.readFile("data.json", (err, data) => {
    if (err === null) {
        const json = JSON.parse(data);
        filterAndWriteData(json, outputTxtFile);
    } else {
        console.log(err);
    }
});