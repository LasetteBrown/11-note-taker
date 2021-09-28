const express = require("express");
const path = require("path");
const api = require("./routes/index");

//sets up the server
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", api);

app.use(express.static("public"));

//GET route for the homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

//GET route for the notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/notes.html"))
);

// Wildcard route to direct users to a 404 page
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

//listens at local host port
app.listen(PORT, () =>
  console.log(`app listening at http://localhost:${PORT}`)
);
