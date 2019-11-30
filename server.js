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
const sizeTypes = require("./routes/sizeTypes");
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
  .set("useCreateIndex", true)
  .connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(cors());
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/configs", globalConfigs);
app.use("/api/cart", cart);
app.use("/api/categories", categories);
app.use("/api/colors", colors);
app.use("/api/comments", comments);
app.use("/api/customers", customers);
app.use("/api/filters", filters);
app.use("/api/genders", genders);
app.use("/api/links", links);
app.use("/api/orders", orders);
app.use("/api/pages", pages);
app.use("/api/partners", partners);
app.use("/api/payment-methods", paymentMethods);
app.use("/api/products", products);
app.use("/api/shipping-methods", shippingMethods);
app.use("/api/sizes", sizes);
app.use("/api/size-types", sizeTypes);
app.use("/api/slides", slides);
app.use("/api/subscribers", subscribers);
app.use("/api/top-categories", topCats);
app.use("/api/wishlist", wishlist);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.use("/", mainRoute);
};

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running on port ${port}`, process.env.NODE_ENV)
);

