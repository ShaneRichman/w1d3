var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [{
  name: "Telus",
  province: "BC",
  sales: [100, 200, 400]
}, {
  name: "Bombardier",
  province: "AB",
  sales: [80, 20, 10, 100, 90, 500]
}, {
  name: "Telus",
  province: "SK",
  sales: [500, 100]
}];

function sumSales(company) {
  var salesSum = 0;
  for (var i = 0; i < company.sales.length; i++) {
    salesSum += company.sales[i];
  }
  return salesSum;
}

function calculateTax(totalSales, taxrates, location) {
  var taxSum = 0;
  taxSum = totalSales * taxrates[location];
  return taxSum;
}

// total sales and total tax, grouped by company
function calculateSalesTax(salesData, taxRates) {
  var totalInfo = {};
  for (var i = 0; i < salesData.length; i++) {
    var companyData = salesData[i];
    var companyName = companyData.name;
    if (!totalInfo[companyName]) {
      totalInfo[companyName] = {
        totalSales: 0,
        totalTax: 0
      };
    }
    var companySales = sumSales(companyData);
    totalInfo[companyName].totalSales += companySales;
    totalInfo[companyName].totalTax += calculateTax(companySales, taxRates, companyData.province);
  }
  return totalInfo;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);