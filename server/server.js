const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");
const hbs = require("hbs");
const path = require("path");
const multer = require("multer"); // Require multer

// env file config
const dotenv = require("dotenv");
dotenv.config();

connectDb();
const app = express();
const port = process.env.PORT || 5000;

// Multer setup: Configure where to store files and what naming convention to use
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Specify the folder where uploaded files will be stored
    cb(null, "uploads/");  // make sure the 'uploads' folder exists
  },
  filename: (req, file, cb) => {
    // Specify the filename to store the file with
    cb(null, Date.now() + path.extname(file.originalname));  // Use timestamp for uniqueness
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// Middleware for parsing JSON and handling CORS
app.use(express.json());
app.use(cors());

// API Route for registering with file upload functionality
app.post("/api/register", upload.single("file"), (req, res) => {
  // 'file' is the name of the file input field in the form
  if (!req.file) {
    return res.status(400).send("No file uploaded");
  }
  res.send({
    message: "File uploaded successfully",
    file: req.file,
  });
});

// Error handling middleware
app.use(errorHandler);

// Using hbs as the view engine
app.set('view engine', 'hbs');

// Register partials for hbs views
hbs.registerPartials(path.join(__dirname, '/views/partials'));

// Routes
app.get("/", (req, res) => {
  res.send("working");
});

app.get("/home", (req, res) => {
  res.render("home", { 
    username: "Poorva", 
    age: 20 
  });
});

app.get("/user", (req, res) => {
  const users = [
    { username: "Palak", age: 20 },
    { username: "Namit", age: 22 },
    { username: "Jiva", age: 21 }
  ];
  
  res.render("user", { users });
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
