const mongoose = require('mongoose');
const Product = require('../backend/models/Product');

const products = [
  {
    name: "Product 1",
    price: 100,
    description: "This is a description for Product 1",
  },
  {
    name: "Product 2",
    price: 200,
    description: "This is a description for Product 2",
  },
  {
    name: "Product 3",
    price: 300,
    description: "This is a description for Product 3",
  },
];

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Database populated with sample products!");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error("Error initializing MongoDB:", err);
    process.exit(1);
  });
