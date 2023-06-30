const currencies = new Map(
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"]
);

currencies.forEach(function (value, key, map) {
  console.log(`${key}, ${value}`);
});

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}, ${value}`);
});
