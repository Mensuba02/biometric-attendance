const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files like CSS or JS from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Serve login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// Handle login form submission
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Basic hardcoded login check
  if (username === "admin" && password === "1234") {
    res.sendFile(path.join(__dirname, "home.html")); // Your main content page
  } else {
    res.send("Invalid username or password.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
