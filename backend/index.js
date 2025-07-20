const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/form", (req, res) => {
  const { name, email, phone, address } = req.body;
  const sql = "INSERT INTO users (name, email, phone, address) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, phone, address], (err, result) => {
    if (err) {
      console.error("Error inserting into DB:", err);
      return res.status(500).json({ message: "DB insert failed" });
    }
    res.json({ message: "Form submitted successfully!" });
  });
});

app.listen(5000, () => {
  console.log("🚀 Server is running on http://localhost:5000");
});
