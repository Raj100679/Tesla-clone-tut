const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const process = require("process");
const database_url = process.env.DATABASE_URL;
const bcrypt = require("bcrypt");

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
    unique: true,
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

  return password.length >= minLength;
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
    const existingUser = await User.findOne({ username });
    const existingUserEmail = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Username already in use. Please choose a different username.",
      });
    }
    if (existingUserEmail) {
      return res.status(400).json({
        message: "Email already in use. Please choose a different Email.",
      });
    }
    if (!isEmailValid(email)) {
      return res.status(400).json({ message: "Invalid Email" });
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
    // res.redirect("/");
    // console.log("Done redirection");
    return res.status(200).json({ message: "User regsitered successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Registration failed" });
  }
});
app.get("/login", (req, res) => {});
app.post("/login", async (req, res) => {
  try {
    let { username, password } = req.body;
    let user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({
        message: "User not found. Please register if you don't have an account",
      });
    } else {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        return res.status(200).json({ message: "User found tadaaa" });
      } else {
        return res.status(400).json({
          message: "Incorrect password. Please double-check your password.",
        });
      }
    }
  } catch (error) {
    console.error("Validation error:", error);
    return res.status(500).json({ message: "Something went wrong! Try Again" });
  }
});

