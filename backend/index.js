const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const process = require("process");
const database_url = process.env.DATABASE_URL;
const bcrypt=require("bcrypt");

mongoose
  .connect(database_url, {
    dbName: "People-data",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});
const User = mongoose.model("User", UserSchema);
User.createIndexes();

const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

function isEmailValid(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

function isPasswordValid(password) {
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);

  return password.length >= minLength ;
}
async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
app.get("/register", (req, res) => {});
app.get("/", (req, res) => {});
app.post("/register", async (req, res) => {
  try {
    let { username, password, email } = req.body;

    if (!isEmailValid(email)) {
      return res.status(400).json({message:"Invalid Email"});
      
    }
    if (!isPasswordValid(password)) {
      return res
        .status(400)
        .json({ message: "Invalid password format or strength" });
    }
    const hashedPassword = await hashPassword(password);
    password = hashedPassword;
    const user = new User({
      username,
      password,
      email,
    });
    await user.save();
    res.status(200).json({ message: "User regsitered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Registration failed" });
  }
});
