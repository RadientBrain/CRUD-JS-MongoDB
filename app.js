const express = require("express");
const paymentRouter = require("./routes/PaymentRoutes");
const mongoose = require("mongoose");
const app = express();
 
//middleware
app.use(express.json());
app.use("/api/payments", paymentRouter);

//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/payments",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
 
module.exports = app;