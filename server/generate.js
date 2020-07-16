var faker = require("faker");

var database = { products: [] };

for (var i = 1; i <= 300; i++) {
  database.products.push({
    id: 1,
    name: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/300x200/?product",
    quantity: faker.random.number(),
  });
}

console.log(JSON.stringify(database));
