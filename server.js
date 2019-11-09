const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const globalConfigs = require("./routes/globalConfigs");
const customers = require("./routes/customers");
const categories = require("./routes/categories");
const products = require("./routes/products");
const genders = require("./routes/genders");
const topCats = require("./routes/topCats");
const colors = require("./routes/colors");
const sizes = require("./routes/sizes");
const filters = require("./routes/filters");
const subscribers = require("./routes/subscribers");
const cart = require("./routes/cart");
const orders = require("./routes/orders");
const links = require("./routes/links");
const pages = require("./routes/pages");
const slides = require("./routes/slides");
const wishlist = require("./routes/wishlist");
const comments = require("./routes/comments");
const shippingMethods = require("./routes/shippingMethods");
const paymentMethods = require("./routes/paymentMethods");
const partners = require("./routes/partners");
const mainRoute = require("./routes/index");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(cors());
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/configs", globalConfigs);
app.use("/customers", customers);
app.use("/categories", categories);
app.use("/products", products);
app.use("/genders", genders);
app.use("/top-categories", topCats);
app.use("/colors", colors);
app.use("/sizes", sizes);
app.use("/filters", filters);
app.use("/subscribers", subscribers);
app.use("/cart", cart);
app.use("/orders", orders);
app.use("/links", links);
app.use("/pages", pages);
app.use("/slides", slides);
app.use("/wishlist", wishlist);
app.use("/comments", comments);
app.use("/shipping-methods", shippingMethods);
app.use("/payment-methods", paymentMethods);
app.use("/partners", partners);
app.use("/", mainRoute);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running on port ${port}`, process.env.NODE_ENV)
);
console.log("Hello This is commit from Sava!!!!!");
console.log("don't you forget: git pull origin dev");
<<<<<<< HEAD
console.log("Second console log!!!");
=======
>>>>>>> f7c72fa09d995fb2d0f29a6eed6ea2416956e074
