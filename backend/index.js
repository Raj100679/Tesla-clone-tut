const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const process=require("process");
const database_url=process.env.DATABASE_URL;
mongoose
  .connect(
    database_url,
    {
      dbName: "People-data",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((err) => {
    console.log("Error Occured while connecting", err);
  });

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
    // validate: {
    //   validator: function (value) {
    //     return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(value);
    //   },
    //   message:
    //     "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
    // },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    // match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
  },
});
const User = mongoose.model("User", UserSchema);
User.createIndexes();

const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

const PORT =  process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
app.get("/register", (req, res) => {});
app.get("/", (req, res) => {});
app.post("/register", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = new User({
      username,
      password,
      email,
    });
    await user.save();
    res.status(201).json({ message: "User regsitered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Registration failed" });
  }
});
