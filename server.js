const express = require("express");
const app = express();
const cors= require('cors');
const port = 3001;
const db = require('./db');
const {ParameterizedQuery: PQ} = require('pg-promise');
const bodyParser = require ("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//Login API
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      // Check if the user exists with the provided email and password
      const user = await db.oneOrNone(SELECT * FROM public."USER" WHERE "Email" = $1 AND "Password" = $2, [email, password]);
      if (user) {
        // Successfully logged in
        res.json({ success: true, user });
      } else {
        // Invalid credentials
        res.status(401).json({ success: false, error: "Invalid email or password" });
      }
    } catch (error) {
      console.error("Error during login:", error.message || error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });
//Registration API
app.post("/signup", async (req, res) => {
    try {
      // Check if the user already exists with the provided email
      const existingUser = await db.oneOrNone('SELECT * FROM public."USER" WHERE "Email" = $1', [email]);
      if (existingUser) {
        // User with the provided email already exists
        return res.status(400).json({ success: false, error: "User with this email already exists" });
      }
      // If the user doesn't exist, insert a new user into the database
      const newUser = await db.oneOrNone(
        `INSERT INTO public."Registration" ("Name", "Email", "Password", "Address", "Contact_No", "User_Type")
         VALUES ($1, $2, $3, $4, $5, $6)
         RETURNING *`,
        [name, email, password, address, contact_no, user_type]
      );
      // Successfully registered
      res.json({ success: true, user: newUser });
    } catch (error) {
      console.error("Error during signup:", error.message || error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
});
  //Add Disaster API
  app.post("/Disaster", async (req, res) => {
    const { title, description, location, type, severity, date } = req.body;
    try {
      // Insert the disaster information into the database
      const newDisaster = await db.one(
        `INSERT INTO public."disaster" ("Title", "Description", "Location", "Type", "Severity", "Date")
         VALUES ($1, $2, $3, $4, $5, $6)
         RETURNING *`,
        [title, description, location, type, severity, date]
      );
      // Successfully added disaster information
      res.json({ success: true, disaster: newDisaster });
    } catch (error) {
      console.error("Error adding disaster information:", error.message || error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });
//Disaster List API
app.get("/disasters", async (req, res) => {
    try {
        // Retrieve all disasters from the database
        const disasters = await db.any('SELECT * FROM public."Disaster"');
        // Return the list of disasters in the response
        res.json(disasters);
      } catch (error) {
        console.error("Error fetching disaster data:", error.message || error);
        res.status(500).json({ success: false, error: "Internal server error" });
      }
    });
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});