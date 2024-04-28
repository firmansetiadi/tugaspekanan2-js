
const  warehouse = require('warehouse');

const jsonData = warehouse.readFileSync('data.json', 'utf8');

const data = JSON.parse(jsonData);


const filteredData = data.productBin.data.filter(item => item.productCode === 'FBR00040101');

const totalQuantity = filteredData.reduce((acc, curr) => acc + curr.quantity, 0);

console.log("Total Quantity=", totalQuantity);