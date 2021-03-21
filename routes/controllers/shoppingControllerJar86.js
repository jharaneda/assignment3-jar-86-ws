exports.getCartJar86 = function (req, res) {
  console.log("Received get request to get shopping cart");
  res.header("Content-Type: application/json");
  res.send(JSON.stringify(cart));
};

exports.getInventory = function (req, res) {
  console.log("Received get inventory request");

  res.header("Content-Type: application/json");
  res.send(JSON.stringify(inventory));
};

let sumTotal = {};

let cart = [];

let inventory = [
  {
    sku: "42-562-0992",
    name: "Ezy Change Mophandle",
    quantity: 6,
    price: 20.78,
  },
  {
    sku: "13-165-1824",
    name: "Oregano - Dry, Rubbed",
    quantity: 7,
    price: 16.44,
  },
  {
    sku: "73-467-3870",
    name: "Sausage - Liver",
    quantity: 7,
    price: 42.55,
  },
  {
    sku: "90-065-2696",
    name: "Pepper - Green, Chili",
    quantity: 4,
    price: 45.33,
  },
  {
    sku: "65-912-1275",
    name: "Chicken - Breast, 5 - 7 Oz",
    quantity: 3,
    price: 45.75,
  },
  {
    sku: "66-454-1246",
    name: "Rye Special Old",
    quantity: 2,
    price: 16.01,
  },
  {
    sku: "11-186-5330",
    name: "Wine - Domaine Boyar Royal",
    quantity: 5,
    price: 27.81,
  },
  {
    sku: "01-607-1259",
    name: "Fudge - Cream Fudge",
    quantity: 5,
    price: 26.22,
  },
  {
    sku: "04-488-4374",
    name: "Wine - Chardonnay Mondavi",
    quantity: 7,
    price: 14.46,
  },
  {
    sku: "50-868-3475",
    name: "Juice - Apple 284ml",
    quantity: 6,
    price: 30.46,
  },
  {
    sku: "17-932-3332",
    name: "Icecream - Dstk Cml And Fdg",
    quantity: 6,
    price: 21.71,
  },
  {
    sku: "62-805-5655",
    name: "Rum - Coconut, Malibu",
    quantity: 8,
    price: 6.77,
  },
  {
    sku: "83-089-5473",
    name: "Cheese - Cream Cheese",
    quantity: 9,
    price: 13.05,
  },
  {
    sku: "68-262-7761",
    name: "Curry Powder Madras",
    quantity: 2,
    price: 30.71,
  },
  {
    sku: "75-005-7223",
    name: "Rum - Mount Gay Eclipes",
    quantity: 4,
    price: 38.58,
  },
  {
    sku: "67-197-6945",
    name: "Wine - Red, Mosaic Zweigelt",
    quantity: 1,
    price: 1.95,
  },
  {
    sku: "90-780-0601",
    name: "Tart Shells - Savory, 3",
    quantity: 5,
    price: 22.99,
  },
  {
    sku: "40-512-0251",
    name: "Onions - Cooking",
    quantity: 6,
    price: 11.87,
  },
  {
    sku: "48-883-6658",
    name: "Swiss Chard - Red",
    quantity: 5,
    price: 21.59,
  },
  {
    sku: "60-315-1643",
    name: "Cabbage - Red",
    quantity: 6,
    price: 43.45,
  },
];
