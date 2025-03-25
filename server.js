const express = require("express");
const app = express();
app.use(express.json());

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// API to get all users
app.get("/users", (req, res) => {
  res.json(users);
});

const PORT = 5001;
app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));
